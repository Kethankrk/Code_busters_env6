import React from 'react'
import medichistory from '../../assets/medichistory.png'
import { useEffect } from 'react'
import axios from 'axios'
const MedicalHistory = () => {
  useEffect(() => {
    ;(async () => {
      const token = localStorage.getItem('token')
      const api = import.meta.env.VITE_API
      const userId = (
        await axios.get(`${api}api/get-user-id/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data.id
        console.log(userId)
      const data = (
        await axios.post(`${api}patient/prescription/get/`, {
          id: userId,
        })
      ).data

      console.log(data)
    })()
  })

  const testdata = [
    {
      description: 'He is ok',
      doctor: 'Arjun',
      medicine: [
        {
          id: 1,
          name: 'dolo',
          prescription: 1,
        },
        {
          id: 2,
          name: 'dolo',
          prescription: 1,
        },
      ],
    },
    {
      description: 'this is cool',
      doctor: 'Arjun',
      medicine: [],
    },
  ]
  return (
    <div className='px-4 flex flex-col items-center pb-28'>
      <div className='w-full flex  flex-col p-5 mb-3 mt-5 rounded-3xl'>
        <div className='flex items-center gap-3'>
          <img src={medichistory} alt='' className='w-16' />
          <div className=''>
            <h1 className='font-bold text-2xl'>Medical History</h1>
            <p> Collect your recent medical report</p>
          </div>
        </div>
        {testdata.reverse().map((e) => (
          <div className='w-full flex  flex-col p-5 gap-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-xl'>
            <h1 className=''>
              <span className='font-bold'>Docter name :</span> Dr.{e.doctor}
            </h1>
            <h1 className=''>
              <span className='font-bold'>Date :</span> Date
            </h1>
            <h1>
              <span className='font-bold'>Description :</span> {e.description}
            </h1>
            <div className='flex gap-7'>
              <h1 className='font-bold'>Medicines :</h1>
              <ul className='list-disc'>
                {e.medicine.map((j) => (
                  <li>{j.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MedicalHistory
