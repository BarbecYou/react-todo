import { useContext, useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import { TaskContext, TaskProvider } from './components/TaskActionContext'
import TaskList from './components/TaskList'

function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <TaskProvider>

      <div className="mainContainer">

        { /* grid column for active todos */}
        <div className="container">
          <header>
            <h1>my task list</h1>
          </header>
          <CustomForm />
          {tasks.length == 0 && <p>You have no tasks to do!</p>}
          {tasks && <TaskList />}
        </div>

        {/* grid column for completed todos*/}
        <div className='container'>
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
