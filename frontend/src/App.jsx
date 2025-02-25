import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Header/>
    <main className='min-h-[80vh]'>
     <Outlet/>
    </main>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
