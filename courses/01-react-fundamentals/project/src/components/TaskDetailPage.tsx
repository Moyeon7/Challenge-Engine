import { useParams, useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'task-app-tasks';

interface Task {
  id: string | number;
  title: string;
  description?: string;
  priority?: string;
  completed?: boolean;
}

function loadTasks(): Task[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tasks = loadTasks();
  const task = tasks.find((t) => String(t.id) === id);

  const handleBack = () => {
    navigate('/challenge/21-react-router');
  };

  if (!task) {
    return (
      <div id="task-detail-page">
        <p>Task not found</p>
        <button type="button" id="task-detail-back" onClick={handleBack}>
          Back to list
        </button>
      </div>
    );
  }

  return (
    <div id="task-detail-page" data-testid="task-detail">
      <h2>{task.title}</h2>
      {task.description != null && <p>{task.description}</p>}
      {task.priority != null && <p>Priority: {task.priority}</p>}
      <button type="button" id="task-detail-back" onClick={handleBack}>
        Back to list
      </button>
    </div>
  );
}
