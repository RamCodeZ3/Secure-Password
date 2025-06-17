import { useState } from 'react'
import './App.css'

function PasswordInput({ value, onChange }) {
  return (
    <div>
      <h3>Introduce tu contraseña</h3>
      <input type="password" value={value}>
         </input>
    </div>
  )
  }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <passwordInput><PasswordInput value={count} onChange={setCount} /></passwordInput>
    </>
  )
}

export default App
