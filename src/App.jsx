import { useState } from 'react'
import PasswordInput from './components/PasswordInput'
import Header from './components/Header'
import PasswordGenerator from './components/PasswordGenerator'


function App() {
  return (
    <>
    <main className='flex flex-col font-inter bg-[#1E1E1E] w-full min-h-dvh'>
      <div>
      <Header/>
      <div className='flex justify-center items-center bg-[#00774d23] w-full p-10'>
        <div className='flex flex-col gap-3'>
          <PasswordInput/>
          <PasswordGenerator/>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default App
