import { useContext, useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import MainComponent from './components/MainComponent';
import { TaskContext, TaskProvider } from './components/TaskActionContext'
import TaskList from './components/TaskList'

function App() {

  return (
    <TaskProvider>
      <MainComponent />
    </TaskProvider>
  )
}

export default App
