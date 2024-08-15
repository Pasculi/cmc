import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layaout = () => {
  return (
    <div className="display">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layaout
