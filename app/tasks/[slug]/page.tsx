export default async function TaskPage({ params } : {
    params: { slug: string };
}) {
    const { slug } = await params;

    const res = await fetch(`http://localhost:3001/tasks/${slug}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch project data');
    }
    const tasks = await res.json();
    return (
        <div>
            <h1>{`Tasks: ${tasks.title}`}</h1>
        </div>
    )
}