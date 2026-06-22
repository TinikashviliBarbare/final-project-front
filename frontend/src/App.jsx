import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Leptop from './components/Leptopshop'
import Createacc from './components/Createacc'
import Phone from './components/Phone'
import Account from './components/Account'
import Contact from './routes/Contact'
import Login from "./components/Login";
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
        <Route path="/createaccount" element={<Createacc />} />
        <Route path="/account" element={<Account />} />
        <Route path ='/contact' element = {<Contact />} />
        <Route
  path="/login"
  element={<Login />}
/>

      </Routes>

      <Footer />
    </>
  )
}

export default App