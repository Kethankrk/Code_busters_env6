import React from 'react'

function DoctorCard({ name, specialty, qualification }) {
  return (
    <div className='flex rounded-xl bg-slate-700 pr-6 pl-2 py-4'>
      <div className='w-[60px] flex items-center justify-center'>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-Download-Image.png&f=1&nofb=1&ipt=ea7bcdd844bb31d0374b8e40a2d9d8e91e53adbcf3ad92dd121fc6bb9ef0d1ff&ipo=images" alt="user image" />
      </div>
      <div>
        <p className='pt-1 text-sm text-white'>
          <span className='font-bold text-sm'>Name:</span> {name}
        </p>
        <p className='pt-1 text-sm text-white'>
          <span className='font-bold text-sm'>specialty:</span> {specialty}
        </p>
        <p className='pt-1 text-sm text-white'>
          <span className='font-bold text-sm'>Qualification:</span>{' '}
          {qualification}
        </p>
      </div>
    </div>
  )
}

export default DoctorCard
