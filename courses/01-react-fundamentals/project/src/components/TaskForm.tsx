import { useState } from 'react'
import type { Task } from './TaskList'
import './TaskCard.css'

interface TaskFormProps {
  onAddTask?: (task: Task) => void
}

export default function TaskForm(_props: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    setError('')
    if (!title.trim()) {
      setError('Title is required')
      return
    }

    _props.onAddTask?.({
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      completed: false,
    })

    setTitle('')
    setDescription('')
    setPriority('Medium')
  }

  return (
    <div className="container">
      <form id='form' onSubmit={handleSubmit}>
        <label htmlFor="task-title">Title</label>
        <input type="text" id='task-title' placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
       
        {error && <p id="task-form-error">{error}</p>}
       
        <textarea name="description" id="description" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
       
        <select name="priority" id="priority" value={priority} onChange={(e)=> setPriority(e.target.value as 'Low' | 'Medium' | 'High')}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}
