export default async function ProjectPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const res = await fetch(`http://localhost:3001/projects/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch project data');
  }

  const project = await res.json();

  return (
    <main>
      <h1>{project.name}</h1>
    </main>
  );
}