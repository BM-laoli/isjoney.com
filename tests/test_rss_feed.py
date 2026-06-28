"""
Test suite for RSS/Atom Feed endpoint.

Usage:
    # 1. Start the dev server first:
    npm run dev

    # 2. Install Python dependencies:
    pip install requests

    # 3. Run tests:
    python tests/test_rss_feed.py

    # Or with pytest:
    pip install pytest
    pytest tests/test_rss_feed.py -v
"""

import sys
import xml.etree.ElementTree as ET
from datetime import datetime
from typing import Optional

import requests

# Fix Unicode output on Windows (GBK → UTF-8)
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # type: ignore

# --- Config ---
BASE_URL = "http://localhost:3000"
FEED_URL = f"{BASE_URL}/api/feed/atom.xml"

# Atom XML namespace
ATOM_NS = "http://www.w3.org/2005/Atom"


def _el(path: str) -> str:
    """Build a namespaced Atom element tag, e.g. '{http://...}title'."""
    return f"{{{ATOM_NS}}}{path}"


def fetch_feed() -> requests.Response:
    """Fetch the feed and raise if unreachable."""
    resp = requests.get(FEED_URL, timeout=10)
    if resp.status_code != 200:
        sys.exit(f"❌ Feed returned {resp.status_code}. Is `npm run dev` running?")
    return resp


def parse_feed(xml_text: str) -> ET.Element:
    """Parse Atom XML, exit on malformed XML."""
    try:
        return ET.fromstring(xml_text)
    except ET.ParseError as e:
        sys.exit(f"❌ Invalid XML: {e}")


# ---------------------------------------------------------------------------
# Test functions — each returns (ok: bool, detail: str)
# ---------------------------------------------------------------------------

def test_feed_accessible(resp: requests.Response) -> tuple[bool, str]:
    """Feed endpoint returns HTTP 200."""
    return resp.status_code == 200, f"status = {resp.status_code}"


def test_content_type(resp: requests.Response) -> tuple[bool, str]:
    """Content-Type is application/atom+xml."""
    ct = resp.headers.get("Content-Type", "")
    ok = "application/atom+xml" in ct
    return ok, f"Content-Type = {ct}"


def test_cache_headers(resp: requests.Response) -> tuple[bool, str]:
    """Cache-Control is set for CDN."""
    cc = resp.headers.get("Cache-Control", "")
    ok = "public" in cc or "max-age" in cc
    return ok, f"Cache-Control = {cc}"


def test_valid_xml(resp: requests.Response) -> tuple[bool, str]:
    """Response body is valid XML."""
    try:
        ET.fromstring(resp.text)
        return True, "valid XML"
    except ET.ParseError as e:
        return False, f"invalid XML: {e}"


def test_feed_root_element(root: ET.Element) -> tuple[bool, str]:
    """Root element is <feed>."""
    is_feed = root.tag == _el("feed")
    return is_feed, f"root = {root.tag.split('}')[-1] if '}' in root.tag else root.tag}"


def test_feed_title(root: ET.Element) -> tuple[bool, str]:
    """Feed has a non-empty <title>."""
    el = root.find(_el("title"))
    title = el.text.strip() if el is not None and el.text else ""
    ok = len(title) > 0
    return ok, f"title = '{title}'"


def test_feed_title_not_blog(root: ET.Element) -> tuple[bool, str]:
    """Feed title does NOT say 'Blog' (was the old broken title)."""
    el = root.find(_el("title"))
    title = el.text.strip() if el is not None and el.text else ""
    ok = "blog" not in title.lower()
    return ok, f"title = '{title}'"


def test_feed_self_link(root: ET.Element) -> tuple[bool, str]:
    """Feed <link rel='self'> points to /projects (not /blog)."""
    for link in root.findall(_el("link")):
        if link.get("rel") == "self":
            href = link.get("href", "")
            ok = "/projects" in href and "/blog" not in href
            return ok, f"self link = {href}"
    return False, "no self link found"


def test_feed_id(root: ET.Element) -> tuple[bool, str]:
    """Feed <id> points to /projects."""
    el = root.find(_el("id"))
    feed_id = el.text.strip() if el is not None and el.text else ""
    ok = "/projects" in feed_id
    return ok, f"id = '{feed_id}'"


def test_feed_updated(root: ET.Element) -> tuple[bool, str]:
    """Feed <updated> is a valid ISO-8601 date."""
    el = root.find(_el("updated"))
    val = el.text.strip() if el is not None and el.text else ""
    try:
        # ISO 8601 parsing
        if val.endswith("Z"):
            val = val[:-1] + "+00:00"
        datetime.fromisoformat(val)
        return True, f"updated = {val}"
    except (ValueError, TypeError):
        return False, f"updated = '{val}' (not valid ISO-8601)"


def test_has_entries(root: ET.Element) -> tuple[bool, str]:
    """Feed has at least one <entry>."""
    entries = root.findall(_el("entry"))
    return len(entries) > 0, f"{len(entries)} entries"


def test_entry_link_points_to_projects(root: ET.Element) -> tuple[bool, str]:
    """Every <entry> <link> points to /projects/ (not /blog/)."""
    entries = root.findall(_el("entry"))
    bad: list[str] = []
    for entry in entries:
        title_el = entry.find(_el("title"))
        title = title_el.text if title_el is not None else "?"
        link_el = entry.find(_el("link"))
        href = link_el.get("href", "") if link_el is not None else ""
        if "/blog/" in href or "/blog" == href.rstrip("/"):
            bad.append(f"  - '{title}': {href}")
    ok = len(bad) == 0
    detail = "all entry links correct" if ok else "BAD links:\n" + "\n".join(bad)
    return ok, detail


def test_entry_required_fields(root: ET.Element) -> tuple[bool, str]:
    """Every <entry> has title, link, id, published, updated."""
    entries = root.findall(_el("entry"))
    required = ["title", "link", "id", "published", "updated"]
    missing_list: list[str] = []
    for i, entry in enumerate(entries):
        title_el = entry.find(_el("title"))
        label = title_el.text if title_el is not None else f"entry[{i}]"
        for field in required:
            el = entry.find(_el(field))
            if el is None:
                missing_list.append(f"  - '{label}' missing <{field}>")
            elif field in ("title", "id") and not (el.text or "").strip():
                missing_list.append(f"  - '{label}' has empty <{field}>")
    ok = len(missing_list) == 0
    detail = "all required fields present" if ok else "\n".join(missing_list)
    return ok, detail


def test_entry_has_summary(root: ET.Element) -> tuple[bool, str]:
    """Every <entry> has a non-empty <summary>."""
    entries = root.findall(_el("entry"))
    missing: list[str] = []
    for entry in entries:
        title_el = entry.find(_el("title"))
        label = title_el.text if title_el is not None else "?"
        summary_el = entry.find(_el("summary"))
        if summary_el is None or not (summary_el.text or "").strip():
            missing.append(f"  - '{label}' has no summary")
    ok = len(missing) == 0
    return ok, "all entries have summary" if ok else "\n".join(missing)


def test_feed_author(root: ET.Element) -> tuple[bool, str]:
    """Feed <author> has name and email."""
    author = root.find(_el("author"))
    if author is None:
        return False, "no <author> element"
    name_el = author.find(_el("name"))
    email_el = author.find(_el("email"))
    name = name_el.text.strip() if name_el is not None and name_el.text else ""
    email = email_el.text.strip() if email_el is not None and email_el.text else ""
    ok = bool(name) and bool(email) and "@" in email
    return ok, f"author = {name} <{email}>"


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

def main() -> int:
    print("=" * 60)
    print("🧪 RSS / Atom Feed Tests")
    print(f"   Target: {FEED_URL}")
    print("=" * 60)

    # ---- Phase 1: HTTP-level tests (no parsing needed) ----
    print("\n📡 HTTP-level checks\n")

    try:
        resp = fetch_feed()
    except requests.ConnectionError:
        print("❌ Cannot connect — is `npm run dev` running on localhost:3000?")
        return 1
    except requests.RequestException as e:
        print(f"❌ Request failed: {e}")
        return 1

    http_tests = [
        ("Feed accessible (200)",       test_feed_accessible,       resp),
        ("Content-Type atom+xml",       test_content_type,          resp),
        ("Cache-Control set",           test_cache_headers,         resp),
        ("Valid XML",                   test_valid_xml,             resp),
    ]

    passed = 0
    total = 0
    for label, fn, arg in http_tests:
        total += 1
        ok, detail = fn(arg)
        icon = "✅" if ok else "❌"
        print(f"  {icon} {label}: {detail}")
        if ok:
            passed += 1

    # ---- Phase 2: XML structure tests ----
    print("\n📄 Atom XML structure\n")

    try:
        root = parse_feed(resp.text)
    except SystemExit:
        return 1

    xml_tests = [
        ("Root is <feed>",               test_feed_root_element,        root),
        ("Feed has title",               test_feed_title,               root),
        ("Title does NOT say Blog",      test_feed_title_not_blog,      root),
        ("Self link → /projects",        test_feed_self_link,           root),
        ("Feed ID → /projects",          test_feed_id,                  root),
        ("<updated> is valid date",      test_feed_updated,             root),
        ("Author has name + email",      test_feed_author,              root),
        ("Has entries",                  test_has_entries,              root),
        ("Entry links → /projects",      test_entry_link_points_to_projects, root),
        ("Entries have required fields", test_entry_required_fields,    root),
        ("Entries have summary",         test_entry_has_summary,        root),
    ]

    for label, fn, arg in xml_tests:
        total += 1
        ok, detail = fn(arg)
        icon = "✅" if ok else "❌"
        print(f"  {icon} {label}: {detail}")
        if ok:
            passed += 1

    # ---- Summary ----
    print("\n" + "=" * 60)
    print(f"  Results: {passed}/{total} passed")
    if passed == total:
        print("  🎉 All tests passed!")
    else:
        print(f"  ⚠️  {total - passed} test(s) failed")
    print("=" * 60)

    return 0 if passed == total else 1


if __name__ == "__main__":
    sys.exit(main())
