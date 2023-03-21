import { useContext, useState } from 'react'

// custom components
import MainComponent from './components/MainComponent';
import { TaskProvider } from './contexts/TaskContext'
import ThemeProvider from './contexts/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <TaskProvider>
        <MainComponent />
      </TaskProvider>
    </ThemeProvider>
  )
}

export default App
