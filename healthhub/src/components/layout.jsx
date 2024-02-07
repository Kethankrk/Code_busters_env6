import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import BottomNav from './BottomNav'

const Layout = () => {
  return (
    <div className='w-full relative h-screen '>
      <TopNavbar />

      <Outlet />
      <BottomNav />
    </div>
  )
}

export default Layout
