import React from 'react'
import Logo from '../assets/logo.png'
import moreIcon from '../assets/moreicon.png'

const TopNavbar = () => {
  return (
    <div className='flex justify-between py-2 px-3 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-b-xl'>
      <img src={Logo} alt='' className='h-12' />
      <div className='flex'>
        {/* <img src={SearchICon} alt="" srcset="" /> */}
        <img src={moreIcon} alt='' srcset='' className='h-6' />
      </div>
    </div>
  )
}

export default TopNavbar
