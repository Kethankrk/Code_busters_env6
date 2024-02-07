import React, { useEffect, useState } from 'react';
import hospital from '../../assets/hospital.png'
import Select from 'react-select';
import axios from 'axios';

const FecilitySearch = () => {
    const [hospitals, setHospital] = useState('')
    const [fecility, setFecility] = useState('')
    const [hospitalOptions, setHospitalOptions] = useState([])
  
    const options = [
      { value: 'Dialysis Centers', label: 'Dialysis Centers' },
      { value: ' Hospice homes', label: ' Hospice homes' },
      { value: ' Imaging and radiology centers', label: 'Imaging and radiology centers' },
    ]
    useEffect(() => {
      ;(async () => {
        try {
          const final_list = []
          const api = import.meta.env.VITE_API
          const hospitals = (await axios.get(`${api}api/hospital/get/`)).data
          console.log(hospitals)
          hospitals.forEach((item) => {
            final_list.push({
              value: item.id,
              label: item.name,
            })
          })
          setHospitalOptions(final_list)
        } catch (error) {
          alert(error)
        }
      })()
    }, [])
    return (
        <div className='px-4 flex flex-col items-center pb-28 relative'>
            <div className="w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl">
            <div className='flex items-center gap-3'>
          <img src={hospital} alt='' className='w-16' />
          <div className=''>
            <h1 className='font-bold text-2xl'>HealthHub Chatbot</h1>
            <p> AI powered assistant</p>
          </div>
        </div>  
        <form className='flex flex-col gap-3 w-full mt-7'>
          <h1 className='font-bold text-lg mt-4'>Select fecility</h1>
  
          <Select
            options={options}
            required
            onChange={(e) => setFecility(e.value)}
          />
          <h1 className='font-bold text-lg'>Select hospital</h1>
          <Select
            options={hospitalOptions}
            required
            onChange={(e) => setHospital(e.value)}
          />
          <h1 className='font-bold text-lg'>Select booking date</h1>
          <input
            required
            type='date'
            placeholder='When you want to book'
            className='w-full bg-white outline-none h-10 placeholder:text-black border rounded-sm '
          />
  
          <button className='bg-blue-400 p-4 text-white font-bold rounded-lg'onClick={e=> alert("Facility booked successfully")}>
            Book
          </button>
        </form>
        </div>
        
        </div>

    )
  }

export default FecilitySearch;
