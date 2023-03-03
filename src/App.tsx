import { useContext, useState } from 'react'

// custom components
import MainComponent from './components/MainComponent';
import { TaskProvider } from './components/TaskActionContext'

function App() {

  return (
    <TaskProvider>
      <MainComponent />
    </TaskProvider>
  )
}

export default App
