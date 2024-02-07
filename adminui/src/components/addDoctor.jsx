import axios from 'axios'
import React, { useState } from 'react'

function AddDoctor({ setAddDoctor }) {
  const [name, SetName] = useState('')
  const [qualification, setQualification] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !qualification) return

    try {
      const hospitalId = localStorage.getItem('hospitalId')
      const req = {
        name,
        qualification,
        hospital: hospitalId,
      }
      const res = await axios.post(
        'http://localhost:8000/api/hospital/add-doctor/',
        req,
      )
      console.log(res.data)
      setAddDoctor(false)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='bg-gray-800 p-10 rounded-lg w-1/3 relative'>
      <button
        className='text-white font-bold absolute right-8 top-5 hover:scale-110'
        onClick={() => setAddDoctor(false)}
      >
        X
      </button>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-gray-300'>Name</label>
          <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Enter docotor name'
            className='w-full px-3 py-2 rounded-md bg-gray-600 outline-none border border-gray-900 text-white'
            onChange={(e) => SetName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label className='block mb-2 text-gray-300'>Qualification</label>
          <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Enter docotor qualification'
            className='w-full px-3 py-2 rounded-md bg-gray-600 outline-none border border-gray-900 text-white'
            onChange={(e) => setQualification(e.target.value)}
            value={qualification}
          />
        </div>
        <div className='flex justify-center items-center mt-5'>
          <button className='px-5 py-2 rounded-lg bg-green-500 text-gray-900 font-semibold'>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddDoctor
