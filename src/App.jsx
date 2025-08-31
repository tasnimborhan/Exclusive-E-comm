import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/layouts/pages/Home'
import Contact from './components/layouts/pages/Contact'
import About from './components/layouts/pages/About'
import SignUp from './components/layouts/pages/SignUp'

function App() {
  

  return (
    <>
    <Routes>
     <Route path="/" element={<RootLayout/>}>
     <Route index element={<Home/>}/>
     <Route path="Contact" element={<Contact/>}/>
     <Route path="About" element={<About/>}/>
     <Route path="SignUp" element={<SignUp/>}/>
     </Route>
    </Routes>
    </>
      
  )
}

export default App
