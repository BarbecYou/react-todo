import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'

export interface Task {
  name: string,
  isChecked: boolean,
  id: number,
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id != id))
  }

  const updateTask = (id: number) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, isChecked: !t.isChecked } : t)))
  }

  return (
    <div className="container">
      <header>
        <h1>my task list</h1>
      </header>
      <CustomForm tasks={tasks} setTasks={setTasks} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  )
}

export default App
