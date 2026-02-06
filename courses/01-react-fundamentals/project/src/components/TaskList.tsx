export interface Task {
  id: string | number
  title: string
  description: string
  priority: string
  completed: boolean
  category?: string
  tags?: string[]
  dueDate?: string | number
}

import TaskCard from './TaskCard'
import './TaskCard.css'

interface TaskListProps {
  tasks?: Task[]
  countText?: string
  onToggle?: (id: string | number) => void
  onDelete?: (id: string | number) => void
  linkToTaskDetail?: boolean
}

const HARDCODED_TASKS: Task[] = [
  { id: 1, title: 'Task One', description: 'First hardcoded task', priority: 'High', completed: false },
  { id: 2, title: 'Task Two', description: 'First hardcoded task', priority: 'High', completed: false },
  { id: 3, title: 'Task Three', description: 'First hardcoded task', priority: 'High', completed: false },
]

export default function TaskList({tasks, onToggle}: TaskListProps) {
  const list = tasks ?? HARDCODED_TASKS
  const completedCount = list.filter(t => t.completed).length

  return (
    <section id="task-list">
      <p id="task-count">
        {completedCount} of {list.length} completed
      </p>
      {list.map((t) => (
        <TaskCard key={t.id} taskId={t.id} title={t.title} description={t.description} priority={t.priority} completed={t.completed} onToggle={onToggle} />
      ))}
    </section>
  )
}
