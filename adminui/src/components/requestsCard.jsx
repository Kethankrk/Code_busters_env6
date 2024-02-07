import React from 'react'

function RequestsCard({ patient, doctor, num }) {
  return (
    <div className='px-6 py-2 w-full rounded-lg bg-slate-700 flex gap-2 mb-5'>
      <div className='px-4 bg-slate-500 rounded-full flex justify-center items-center'>
        {num}
      </div>
      <div>
        <p className='text-white text-sm'>
          <span className='font-semibold'>Patient: </span>
          {patient}
        </p>
        <p className='text-white text-sm'>
          <span className='font-semibold'>Doctor: </span>
          {doctor}
        </p>
      </div>
    </div>
  )
}

export default RequestsCard
