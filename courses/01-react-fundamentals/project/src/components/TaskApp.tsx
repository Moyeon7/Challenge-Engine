import { useState, type Dispatch, type SetStateAction } from 'react'
import type { Task } from './TaskList'
import TaskCard from './TaskCard'
import { TaskForm } from '.'
import FilterBar  from './FilterBar'

type Filter = 'all' | 'active' | 'completed'
const priorityRank: Record<string, number> = {
  'High': 1,
  'Medium': 2,
  'Low': 3
}

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

export default function TaskApp({tasks, setTasks, showForm, onDelete, showFilterBar}: TaskAppProps) {
  const list = tasks ?? HARDCODED_TASKS
  const [filter, setFilter] = useState<Filter>('all')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'high' | 'low' | 'alphabetical'>('newest')

  function handleAddTask(task: Task) {
    setTasks(prev => [...prev, task])
  }

  const handleDelete = (id: string | number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const handleToggle = (id: string | number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const filteredList = list.filter(t => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const sortedList = [...filteredList].sort((a, b) => {
    switch (sortOrder) {
      case 'high':
        return priorityRank[a.priority] - priorityRank[b.priority]

      case 'low':
        return priorityRank[b.priority] - priorityRank[a.priority]

      case 'alphabetical':
        return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })

      case 'oldest':
        return Number(a.id) - Number(b.id)

      case 'newest':
      default:
        return Number(b.id) - Number(a.id)
    }
  })

  return (
    <section id="task-list">
      {/* <h1 id="task-count" style={{fontSize: '1rem', color: '#333'}}>{list.length} Tasks</h1> */}
      <h1 id="task-count">
        Showing {sortedList.length} of {list.length} tasks
      </h1>

      {showForm && <TaskForm onAddTask={handleAddTask} />}

      {showFilterBar && (
        <FilterBar filter={filter} onFilterChange={setFilter} sortOrder={sortOrder} onSortChange={setSortOrder} />
      )}

      {sortedList.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#0d0202', fontSize: '1rem', fontWeight: 'bold' }} id='filter-empty-message'>No tasks to show</p>
      ) : (
        sortedList.map((t) => (
          <TaskCard key={t.id} id={t.id} title={t.title} description={t.description} priority={t.priority} completed={t.completed} onToggle={handleToggle} taskId={t.id} onDelete={onDelete ?? handleDelete} />
        ))
      )}
    </section>
  )
}
