import React from 'react'
import homeicon from '../assets/homeicon.png'
import serviceIcon from '../assets/servicesicon.png'
import helpIcon from '../assets/helpicon.png'
import userIcon from '../assets/usericon.png'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className='w-full bg-white flex justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] fixed bottom-0 items-center left-0 right-0 p-3'>
      <div className='flex flex-col opacity-50 hover:opacity-100 items-center'>
        <Link to='/' className='icons w-8'>
          <img src={homeicon} alt='' srcset='' />
        </Link>
        <h1 className='text-sm font-bold'> Home</h1>
      </div>
      <div className='flex flex-col opacity-50 hover:opacity-100 items-center'>
        <Link to='/service' className='icons w-9'>
          <img src={serviceIcon} alt='' srcset='' />
        </Link>
        <h1 className='text-sm font-bold'> services</h1>
      </div>
      <Link
        to='/help'
        className='flex flex-col opacity-50 hover:opacity-100 items-center'
      >
        <div className='icons w-8'>
          <img src={helpIcon} alt='' srcset='' />
        </div>
        <h1 className='text-sm font-bold'> Help</h1>
      </Link>
      <div className='flex flex-col opacity-50 hover:opacity-100 items-center'>
        <div className='icons w-8'>
          <img src={userIcon} alt='' srcset='' />
        </div>
        <h1 className='text-sm font-bold'> Profile</h1>
      </div>
    </div>
  )
}

export default BottomNav
