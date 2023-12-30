import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessagesComponent from './components/messages/messages.component'
import FormComponent from './components/form/form.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormComponent />
      <MessagesComponent />
    </>
  )
}

export default App
