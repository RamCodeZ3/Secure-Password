import { useState } from 'react'
import PasswordInput from './components/PasswordInput'
import Header from './components/Header'


function App() {
  return (
    <>
    <main className='flex flex-col font-inter bg-[#1E1E1E] w-full min-h-dvh'>
      <div>
      <Header/>
      <div className='flex justify-center items-center bg-[#00774d23] w-full'>
        <PasswordInput/>
      </div>
    </div>
    </main>
    </>
  )
}

export default App
