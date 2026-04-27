import "./TaskCard.css";
import { useState, useEffect } from "react"

interface TaskCardProps {
  id?: string | number
  title?: string
  description?: string
  priority?: string
  completed?: boolean
  onToggle?: (id: string | number) => void
  onDelete?: (id: string | number) => void
  onUpdateTask?: (id: string | number, updates: Record<string, unknown>) => void
  linkToTaskDetail?: boolean
  taskId?: string | number
  editingId?: string | number | null
  setEditingId?: (id: string | number | null) => void
  dueDate?: string | number
}

export default function TaskCard(_props: TaskCardProps) {
  const isEditing = _props.id !== undefined && _props.editingId === _props.id
  const [title, setTitle] = useState(_props.title || "")
  const [description, setDescription] = useState(_props.description || "")
  const [priority, setPriority] = useState(_props.priority || "Low")
  const due = _props.dueDate ? new Date(_props.dueDate) : null;
  const now = new Date();

  const isOverdue =
    due && due < now && !_props.completed;

  const isToday =
    due && due.toDateString() === now.toDateString();

  const isSoon =
    due &&
    !isOverdue &&
    !isToday &&
    (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) <= 3;

  const handleDelete = () => {
    if (!_props.onDelete) return

    if (window.confirm("Are you sure?")) {
      _props.onDelete(_props.id as string | number)
    }
  }
  useEffect(() => {
    setTitle(_props.title || "")
    setDescription(_props.description || "")
    setPriority(_props.priority || "Low")
  }, [_props.title, _props.description, _props.priority])

  return(
    <div className={`container ${_props.completed ? "completed" : ""}`}>
      {!isEditing ? (
        <>
          <button onClick={() => _props.setEditingId?.(_props.id!)}>Edit</button>
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
        </>
      ):(
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {_props.dueDate && (
            <p
              id="task-due-date"
              data-overdue={isOverdue ? "true" : "false"}
            >
              {new Date(_props.dueDate).toLocaleDateString()}
            </p>
          )}

          {isOverdue && <span className="overdue">Overdue</span>}
          {isToday && <span className="today">Due Today</span>}
          {isSoon && <span className="soon">Due Soon</span>}

          <button
            onClick={() => {
              if (!title.trim()) {
                alert("Title cannot be empty")
                return
              }

              _props.onUpdateTask?.(_props.id!, {
                title,
                description,
                priority,
              })

              _props.setEditingId?.(null)
            }}
          >
            Save
          </button>

          <button onClick={() => _props.setEditingId?.(null)}>
            Cancel
          </button>
        </>
      )}
    </div>
  )
}