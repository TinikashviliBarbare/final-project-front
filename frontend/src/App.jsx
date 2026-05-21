import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Myaccount from './routes/Myaccount'
import Leptop from './components/Leptopshop'
import Createaccount from './components/Createacc'
import Phone from './components/Phone'
import './index.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/notebook 9pro" element={<Leptop />} />
        <Route path='/Create Account' element={<Createaccount />}/>
        <Route path='/Prime S24 Solar Ultra' element={<Phone />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App