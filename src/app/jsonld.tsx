import type {
  BlogPosting,
  BreadcrumbList,
  Country,
  EducationalOrganization,
  Occupation,
  Organization,
  Person,
  PostalAddress,
  WebSite,
  WithContext,
} from "schema-dts";

import { DATA, getEmail } from "@/data";

/*
 * Generate BreadcrumbList JSON-LD
 */

export function generateBreadcrumbListJsonLd(
  locale: "en" | "zh" = "en",
): string {
  const breadcrumbList: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: DATA.navbar.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item:
        locale === "zh"
          ? `${DATA.url}/zh${item.href}`
          : `${DATA.url}${item.href}`,
    })),
  };

  return JSON.stringify(breadcrumbList);
}

/*
 * Generate Website JSON-LD
 */

export function generateWebsiteJsonLd(locale: "en" | "zh" = "en"): string {
  const author: Person = {
    "@type": "Person",
    name: locale === "zh" ? DATA.chinese.name : DATA.name,
    url: locale === "zh" ? `${DATA.url}/zh` : DATA.url,
  };

  const websiteJsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name:
      locale === "zh"
        ? `${DATA.chinese.name} - 主页`
        : `${DATA.name} - Portfolio`,
    description: locale === "zh" ? DATA.chinese.description : DATA.description,
    url: locale === "zh" ? `${DATA.url}/zh` : DATA.url,
    author,
  };

  return JSON.stringify(websiteJsonLd);
}

/*
 * Generate Person JSON-LD
 */

function getSocialMediaUrls(): string[] {
  return Object.values(DATA.contact.social)
    .filter((social) => social.url && social.name !== "Email")
    .map((social) => social.url);
}

function getAddress(): PostalAddress {
  const addressCountry: Country = { "@type": "Country", name: "Singapore" };
  const address: PostalAddress = {
    "@type": "PostalAddress",
    addressLocality: DATA.location,
    addressCountry,
  };
  return address;
}

function getOrganization(): Organization {
  const organization: Organization = {
    "@type": "Organization",
    name: DATA.work[0].company,
    url: DATA.work[0].href,
  };
  return organization;
}

function getOccupation(): Occupation {
  return {
    "@type": "Occupation",
    name: DATA.work[0].title,
    description: DATA.work[0].description,
  };
}

function getEducation(): EducationalOrganization[] {
  return DATA.education.map((edu) => ({
    "@type": "EducationalOrganization",
    name: edu.school,
    url: edu.href,
  }));
}

export function generatePersonJsonLd(locale: "en" | "zh" = "en"): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: locale === "zh" ? DATA.chinese.name : DATA.name,
    givenName: DATA.firstName,
    familyName: DATA.surname,
    alternateName: locale === "zh" ? DATA.chinese.name : DATA.name,
    description: locale === "zh" ? DATA.chinese.description : DATA.description,
    url: locale === "zh" ? `${DATA.url}/zh` : DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    /* Contact Info */
    email: getEmail(),
    sameAs: getSocialMediaUrls(),
    address: getAddress(),
    /* Work Info */
    jobTitle: DATA.work[0].title,
    worksFor: getOrganization(),
    hasOccupation: getOccupation(),
    knowsAbout: DATA.skills,
    /* Education Info */
    alumniOf: getEducation(),
  });
}

/*
 * Generate Blog JSON-LD
 */
export function generateBlogJsonLd(
  posts: {
    metadata: Record<string, unknown> & {
      title: string;
      date: string;
      summary: string;
    };
    slug: string;
    locale?: string;
  }[],
): string {
  const itemListElements = posts
    .filter((post) => post.locale !== "zh")
    .map((post, index) => {
      const postUrl = `${DATA.url}/blog/${post.slug}`;

      return {
        "@type": "ListItem",
        position: index + 1,
        url: postUrl,
      };
    });

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: itemListElements,
  });
}

/*
 * Generate BlogPosting JSON-LD
 */

export function generateBlogPostingJsonLd(post: {
  metadata: Record<string, unknown> & {
    title: string;
    date: string;
    summary: string;
    image?: string;
  };
  slug: string;
  locale?: string;
}): string {
  const socialMediaUrls = getSocialMediaUrls();

  const author: Person = {
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    sameAs: socialMediaUrls,
  };

  const publisher: Person = {
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
  };

  const baseUrl =
    post.locale === "zh" ? `${DATA.url}/zh/blog` : `${DATA.url}/blog`;
  const postUrl = `${baseUrl}/${post.slug}`;

  const blogPosting: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    description: post.metadata.summary,
    image: post.metadata.image
      ? `${DATA.url}${post.metadata.image}`
      : `${postUrl}/opengraph-image`,
    url: postUrl,
    author,
    publisher,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return JSON.stringify(blogPosting);
}


/*
 * Generate Projects List JSON-LD
 */
export function generateProjectsJsonLd(
  projects: {
    metadata: Record<string, unknown> & {
      title: string;
      summary?: string;
      tech?: string[];
      status?: string;
    };
    slug: string;
  }[],
): string {
  const itemListElements = projects.map((project, index) => {
    const projectUrl = `${DATA.url}/projects/${project.slug}`;

    return {
      "@type": "ListItem",
      position: index + 1,
      url: projectUrl,
    };
  });

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects",
    description: DATA.projectInfo.description,
    itemListElement: itemListElements,
  });
}

/*
 * Generate Single Project JSON-LD (SoftwareSourceCode)
 */
export function generateProjectJsonLd(project: {
  metadata: Record<string, unknown> & {
    title: string;
    summary?: string;
    tech?: string[];
    status?: string;
    date?: string;
    github?: string;
    demo?: string;
    image?: string;
  };
  slug: string;
}): string {
  const socialMediaUrls = getSocialMediaUrls();
  const projectUrl = `${DATA.url}/projects/${project.slug}`;

  const author: Person = {
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    sameAs: socialMediaUrls,
  };

  // 使用 SoftwareSourceCode 类型，更适合项目
  const softwareSourceCode = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.metadata.title,
    description: project.metadata.summary,
    url: projectUrl,
    author,
    ...(project.metadata.github && {
      codeRepository: project.metadata.github,
    }),
    ...(project.metadata.tech && {
      programmingLanguage: project.metadata.tech,
    }),
    ...(project.metadata.date && {
      dateCreated: project.metadata.date,
    }),
    ...(project.metadata.image && {
      image: `${DATA.url}${project.metadata.image}`,
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
    },
  };

  return JSON.stringify(softwareSourceCode);
}