import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'

export interface Task {
  name: string,
  isChecked: boolean,
  id: number,
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div className="container">
      <header>
        <h1>my task list</h1>
      </header>
      <CustomForm setTasks={setTasks} />
    </div>
  )
}

export default App
