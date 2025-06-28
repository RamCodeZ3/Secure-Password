import { useState } from 'react'
import PasswordInput from './components/PasswordInput'
import Header from './components/Header'


function App() {
  return (
    <>
    <div className='font-inter'>
      <Header/>
      <div>
        <PasswordInput/>
      </div>
    </div>
    </>
  )
}

export default App
