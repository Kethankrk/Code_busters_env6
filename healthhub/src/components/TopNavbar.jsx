import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import moreIcon from '../assets/moreicon.png'
import { useNavigate } from 'react-router-dom'

const TopNavbar = () => {
  const navigator = useNavigate();
  const [activate, Setactivate] = useState(false)
  const signout = () =>{
    localStorage.removeItem("token")
    navigator("/signin")
    
  }
  return (
    <div className='flex relative  justify-between py-2 px-3 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-b-xl'>
      <img src={Logo} alt='' className='h-12' />
      <div className='flex ' onClick={(e) => Setactivate(true)}>
        {/* <img src={SearchICon} alt="" srcset="" /> */}
        <img src={moreIcon} alt='' srcset='' className='h-6' />
      </div>
      {activate ? (
        <div className='absolute bg-white flex flex-col px-7 py-2 top-12 right-2  gap-3 items-center justify-between rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <button className='border-b-2 px-5 py-4 text-xl ' onClick={signout}>Sign out</button>{' '}
          <button
            onClick={(e) => Setactivate(false)}
            className='font-blacks text-xl'
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default TopNavbar
