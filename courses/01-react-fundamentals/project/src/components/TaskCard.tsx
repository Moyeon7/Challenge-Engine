import "./TaskCard.css"
import { useState } from "react"

interface TaskCardProps {
  id?: string | number
  title?: string
  description?: string
  priority?: string
  completed?: boolean
  onToggle?: (id: string | number) => void
  onDelete?: (id: string | number) => void
  onUpdateTask?: (id: string | number, updates: Record<string, unknown>) => void
  editingId?: string | number | null
  linkToTaskDetail?: boolean
  taskId?: string | number
}

export default function TaskCard(_props: TaskCardProps) {
  const handleDelete = () => {
    if (!_props.onDelete) return

    if (window.confirm("Are you sure?")) {
      _props.onDelete(_props.id as string | number)
    }
  }
  const [isEditing, setIsEditing] = useState(false)

  return(
    <div className={`container ${_props.completed ? "completed" : ""}`}>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <article id="task-card" data-completed={_props.completed ? "true" : "false"}>
        <h2 style={{ textDecoration: _props.completed ? "line-through" : "none" }}>{_props.title}</h2>
        <p style={{ textDecoration: _props.completed ? "line-through" : "none" }}>{_props.description}</p>
        <p>Priority: {_props.priority}</p>
      </article>
      {_props.onToggle && (
          <input
            type="checkbox"
            id="task-complete"
            checked={Boolean(_props.completed)}
            onChange={() => _props.onToggle?.(_props.id as string | number)}
          />
      )}  
      {_props.onDelete && (
        <button id="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  )
}
