import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import BottomNav from './BottomNav'

const Layout = () => {
  const navigator = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigator('/signin')
    }
  }, []);
  return (
    <div className='w-full relative h-screen '>
      <TopNavbar />

      <Outlet />
      <BottomNav />
    </div>
  )
}

export default Layout
