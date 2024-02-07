import React from 'react'
import docter from '../../assets/doctor.svg'
const HelpPage = () => {
  return (
    <div className='px-4 flex flex-col items-center pb-28'>
      <img src={docter} alt='' className='mt-9 w-3/4' />

      {/* <h1 className='font-bold text-4xl mt-5'>100</h1> */}

      <h1 className='font-bold text-2xl mt-5 text-gray-400 text-center'>
        Bringing Care Closer: Your Health, Our Priority
      </h1>

      <div className='w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
        <h1 className='font-bold text-xl'>Call us</h1>
        <div className='flex justify-between mt-3 border-b-2 pb-3'>
          <div className='flex gap-10'>
            <h1 className='font-bold text-red-500 text-xl'>100 </h1>
            <h1 className='text-xl'>Police </h1>
          </div>
          <a
            href='tel:100'
            className='border-red-500 border-2 px-3 text-xl rounded-xl   '
          >
            100
          </a>
        </div>
        <div className='flex justify-between mt-3 border-b-2 pb-3'>
          <div className='flex gap-10'>
            <h1 className='font-bold text-green-500 text-xl'>101</h1>{' '}
            <h1 className='text-xl'>Fire Station </h1>
          </div>
          <a
            href='tel:101    '
            className='border-green-500 border-2 px-3 text-xl rounded-xl   '
          >
            101
          </a>
        </div>
        <div className='flex justify-between mt-3 border-b-2 pb-3'>
          <div className='flex gap-10'>
            <h1 className='font-bold text-blue-500 text-xl'>108</h1>{' '}
            <h1 className='text-xl'>Ambulance </h1>
          </div>
          <a
            href='tel:108'
            className='border-blue-500 border-2 px-3 text-xl rounded-xl   '
          >
            108
          </a>
        </div>
        <div className='flex justify-between mt-3 border-b-2 pb-3'>
          <div className='flex gap-10'>
            <h1 className='font-bold text-gray-500 text-xl'>181</h1>{' '}
            <h1 className='text-xl'>Women Helpline </h1>
          </div>
          <a
            href='tel:181'
            className='border-gray-500 border-2 px-3 text-xl rounded-xl   '
          >
            181
          </a>
        </div>
      </div>
    </div>
  )
}

export default HelpPage
