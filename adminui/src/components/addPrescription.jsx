import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddPrescription({ doctors, addpres }) {
  const [description, setDescription] = useState('')
  const [patient, setPatient] = useState([])
  const [selectedPatient, setSelectedPatient] = useState(0)
  const [selectedDoctor, setSelectedDoctor] = useState(0)
  useEffect(() => {
    ;(async () => {
      const api = import.meta.env.VITE_API
      const res = await axios.get(`${api}patient/get/`)
      setPatient(res.data.user)
    })()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(description, selectedDoctor, selectedPatient)
    if ((!description, !selectedDoctor, !selectedPatient)) return

    try {
      const hospitalId = localStorage.getItem('hospitalId')
      const req = {
        doctor: selectedDoctor,
        patient: selectedPatient,
        description,
        hospital: hospitalId,
      }
      const api = import.meta.env.VITE_API

      const res = await axios.post(`${api}patient/prescription/`, req)
      console.log(res.data)
      addpres(false)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='bg-gray-800 p-10 rounded-lg w-1/3 relative'>
      <button
        className='text-white font-bold absolute right-8 top-5 hover:scale-110'
        onClick={() => addpres(false)}
      >
        X
      </button>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-gray-300'>Doctor</label>
          <select
            name=''
            id=''
            className='bg-gray-600 px-5 py-2 w-full text-gray-300'
            // value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value='0'>------</option>
            {doctors.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-gray-300'>Patient</label>
          <select
            name=''
            id=''
            className='bg-gray-600 px-5 py-2 w-full text-gray-300'
            onChange={(e) => setSelectedPatient(e.target.value)}
            value={selectedPatient}
          >
            <option value='0'>------</option>

            {patient.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-gray-300'>Description</label>
          <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Enter docotor name'
            className='w-full px-3 py-2 rounded-md bg-gray-600 outline-none border border-gray-900 text-white'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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

export default AddPrescription
