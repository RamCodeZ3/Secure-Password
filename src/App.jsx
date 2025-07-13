import { useState } from 'react'
import PasswordInput from './components/PasswordInput'
import Header from './components/Header'
import PasswordGenerator from './components/PasswordGenerator'
import Title from './components/Title'
import Title2 from './components/Title2'
import Habits from './components/Habits'


function App() {
  return (
    <>
    <Header/>
    <main className='flex flex-col font-inter bg-[#1E1E1E] w-full min-h-dvh mt-10'>
      <div>
        <section id='inicio'>
      <div className='flex justify-center items-center w-full py-10'>
        <Title/>
      </div>
      
        <div className='flex justify-center items-center bg-[#00774d23] w-full p-10'>
        <div className='flex flex-col gap-3'>
          <PasswordInput/>
          <PasswordGenerator/>
        </div>
      </div>
      </section>
    </div>
    <section id='info'>
      <div className='flex justify-center items-center py-10'>
      <Title2/>
    </div>
    <div className='flex justify-center items-center bg-[#00774d23] w-full p-10'>
      <Habits/>
    </div>
    </section>
    </main>
    </>
  )
}

export default App
