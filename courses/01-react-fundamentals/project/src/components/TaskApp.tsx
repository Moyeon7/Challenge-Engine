import type { Dispatch, SetStateAction } from 'react'
import type { Task } from './TaskList'
import TaskCard from './TaskCard'
import { TaskForm } from '.'


interface TaskAppProps {
  tasks?: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
  dispatch?: (action: { type: string; payload?: unknown }) => void
  showForm?: boolean
  countFormat?: string
  showFilterBar?: boolean
  showStatsPanel?: boolean
  onDelete?: (id: string | number) => void
  linkToTaskDetail?: boolean
}

const HARDCODED_TASKS: Task[] = [
  { id: 1, title: 'Task One', description: 'First hardcoded task', priority: 'High', completed: false },
  { id: 2, title: 'Task Two', description: 'First hardcoded task', priority: 'High', completed: false },
  { id: 3, title: 'Task Three', description: 'First hardcoded task', priority: 'High', completed: false },
]

export default function TaskApp({tasks, setTasks, showForm }: TaskAppProps) {
  const list = tasks ?? HARDCODED_TASKS
  function handleAddTask(task: Task) {
    setTasks(prev => [...prev, task])
  }
  const handleToggle = (id: string | number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <section id="task-list">
      {/* <h1 id="task-count" style={{fontSize: '1rem', color: '#333'}}>{list.length} Tasks</h1> */}
      <h1 id="task-count">
        {list.filter(t => t.completed).length} of {list.length} completed
      </h1>

      {showForm && <TaskForm onAddTask={handleAddTask} />}
      {list.map((t) => (
        <TaskCard key={t.id} title={t.title} description={t.description} priority={t.priority} completed={t.completed} onToggle={handleToggle} taskId={t.id} />
      ))}
    </section>
  )
}
