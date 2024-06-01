import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Todos from './components/Todos'
import AddTodo from './components/AddTodos'


function App() {
  

  return (
    <>
      <h1 className='heading'>TO-DO</h1>
      <AddTodo/>
      <Todos />

    </>
  )
}

export default App
