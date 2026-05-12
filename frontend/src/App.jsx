import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Myaccount from './routes/Myaccount'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myaccount" element={<Myaccount />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App