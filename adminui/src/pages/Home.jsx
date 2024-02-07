import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/doctor'
import RequestsCard from '../components/requestsCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AddDoctor from '../components/addDoctor'
import AddPrescription from '../components/addPrescription'

function HomePage() {
  const [userReq, setUserReq] = useState([])
  const [addDoctor, setAddDoctor] = useState(false)
  const [addPrescripton, setAddPrescription] = useState(false)
  const [doctor, setDoctor] = useState([])
  const navigation = useNavigate()

  useEffect(() => {
    ;(async () => {
      try {
        const api = import.meta.env.VITE_API
        const token = localStorage.getItem('token')
        const result = (await axios.get(`${api}api/hospital/request/`)).data
        setUserReq(result)

        const lol = await axios.get(`${api}api/hospital/add-doctor/`)
        setDoctor(lol.data)
        console.log(lol.data)

        const doode = await axios.get(`${api}api/hospital/get-id/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        localStorage.setItem('hospitalId', doode.data.id)

        console.log(doode.data)
      } catch (error) {
        alert(error)
      }
    })()
  }, [addDoctor])

  const logout = () => {
    localStorage.removeItem('token')
    navigation('/login')
  }
  return (
    <main className='bg-slate-900 min-h-screen flex'>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-55 flex justify-center items-center z-10 ${
          addDoctor ? 'visible' : 'hidden'
        }`}
      >
        <AddDoctor setAddDoctor={setAddDoctor} />
      </div>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-55 flex justify-center items-center z-10 ${
          addPrescripton ? 'visible' : 'hidden'
        }`}
      >
        <AddPrescription doctors={doctor} addpres={setAddPrescription}/>
      </div>
      <div className='bg-slate-800 p-10 flex flex-col gap-10 w-1/6 relative'>
        <div className='bg-slate-700 px-5 py-2 rounded-lg flex justify-center hover:scale-105'>
          <button
            className='text-white text-sm font-medium'
            onClick={() => setAddDoctor(true)}
          >
            Add Doctor
          </button>
        </div>
        <div className='bg-slate-700 px-5 py-2 rounded-lg flex justify-center hover:scale-105'>
          <button className='text-white text-sm font-medium'>
            Add Facility
          </button>
        </div>
        <div className='bg-slate-700 px-5 py-2 rounded-lg flex justify-center hover:scale-105'>
          <button className='text-white text-sm font-medium' onClick={() => setAddPrescription(true)}>
            Add prescription
          </button>
        </div>
        <div className='bg-green-600 px-5 py-2 rounded-lg flex justify-center hover:scale-105 absolute bottom-5 left-16'>
          <button
            className='text-white text-sm font-medium'
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className='py-10 flex flex-col items-center px-36 gap-5 border-r border-white w-3/6'>
        <p className='text-white'>Employees</p>
        {doctor.map((item) => (
          <DoctorCard
            name={item.name}
            specialty='General medicine'
            qualification={item.qualification}
          />
        ))}
      </div>
      <div className='w-2/6 p-3 overflow-scroll'>
        <p className='text-center font-medium text-xl text-white pb-5'>
          APPOINMENTS
        </p>
        {userReq.length == 0 && (
          <p className='text-center text-red-600 text-sm mt-10'>
            No appoinments today
          </p>
        )}
        {userReq.map((item, index) => (
          <RequestsCard
            patient={item.patient}
            doctor={item.doctor}
            num={index}
          />
        ))}
      </div>
    </main>
  )
}

export default HomePage
