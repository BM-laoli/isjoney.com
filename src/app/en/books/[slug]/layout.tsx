// app/projects/[slug]/layout.tsx
export default async function BooksLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      {props.children}
    </>
  );
}
