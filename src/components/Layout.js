import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '././header/Header.js'
import Footer from '././footer/Footer.js'

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

export default Layout

