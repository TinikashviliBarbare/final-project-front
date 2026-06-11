import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Myaccount from './routes/Myaccount'
import Leptop from './components/Leptopshop'
import Createacc from './components/Createacc'
import Phone from './components/Phone'
import Account from './components/Account'
import Contact from './routes/Contact'
import './index.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Notebook9pro" element={<Leptop />} />
        <Route path='/PrimeS24SolarUltra' element={<Phone />} />
        <Route path="/login" element={<Myaccount />} />
        <Route path="/createaccount" element={<Createacc />} />
        <Route path="/account" element={<Account />} />
        <Route path ='/contact' element = {<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App