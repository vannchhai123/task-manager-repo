export default async function TasksPage({
  searchParams,
}: {
  searchParams: { projectId?: string };
}) {
  const projectId = searchParams.projectId;

  if (!projectId) {
    return <div>Missing projectId</div>;
  }

  const res = await fetch(
    `http://localhost:3001/tasks?projectId=${projectId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div>Failed to load tasks</div>;
  }

  const tasks = await res.json();

  return (
    <main>
      <h1>Tasks for Project {projectId}</h1>

      {tasks.length === 0 && <p>No tasks found</p>}

      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
