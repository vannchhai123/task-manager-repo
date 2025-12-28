import Link from 'next/link';

export default async function ProjectsListPage() {
    const res = await fetch('http://localhost:3001/projects', {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch projects list');
    }
    const projects = await res.json();

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            
            <div className="grid gap-4">
                {projects.map((project: any) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="p-6 border rounded-lg hover:border-blue-500 transition-colors shadow-sm bg-white"
                >
                    <h2 className="text-xl font-semibold text-blue-600">{project.name}</h2>
                    <p className="text-gray-500">Client: {project.client}</p>
                </Link>
                ))}
            </div>

            {projects.length === 0 && (
                <p className="text-gray-500 italic">No projects found in db.json.</p>
            )}
        </main>
    );
}