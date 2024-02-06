import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import BottomNav from '../../components/BottomNav'
import ticket from '../../assets/ticket.png'
import hospital from '../../assets/hospital.png'
import medichistory from '../../assets/medichistory.png'
import medicineIcon from '../../assets/medicine.png'
import chatbot from '../../assets/chatbot.png'
import Diet from '../../assets/diet.png'
import bmi from '../../assets/bmi.png'
import food from '../../assets/foodicon.png'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
   

      <div className='p-4 flex flex-col mt-3 pb-36'>
        <div className='flex flex-col p-5 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <h1
            className=' text-sm
                        '
          >
            Category For.
          </h1>
          <h1
            className='text-xl font-bold mb-4
                        '
          >
            Hospital Services
          </h1>

          <div className='grid grid-cols-3 gap-7 py-5 border-t-2'>
            <Link to="/opbooking" className='col-span-1  flex flex-col '>
              <div className='bg-green-400 p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={ticket} alt='' />
              </div>
              <h1 className='text-center font-bold'>Book OP tickets</h1>
            </Link>

            <div className='col-span-1  flex flex-col '>
              <div className='bg-green-400       p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={hospital} alt='' />
              </div>
              <h1 className='text-center font-bold'>search facility</h1>
            </div>
            <div className='col-span-1  flex flex-col '>
              <div className='bg-green-400       p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={medichistory} alt='' />
              </div>
              <h1 className='text-center font-bold'>Medical history</h1>
            </div>
            <div className='col-span-1  flex flex-col '>
              <div className='bg-green-400 p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={medicineIcon} alt='' />
              </div>
              <h1 className='text-center font-bold'>Medicine details </h1>
            </div>
            <div className='col-span-1  flex flex-col '>
              <div className='bg-green-400 p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={chatbot} alt='' />
              </div>
              <h1 className='text-center font-bold'>Medical Chatbot </h1>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-5 mt-5  rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <h1
            className=' text-sm
                        '
          >
            Category For.
          </h1>
          <h1
            className='text-xl font-bold mb-4
                        '
          >
            Health Care
          </h1>
          <div className='grid grid-cols-3 gap-7 py-5 border-t-2'>
            <Link to='/dietplan' className='col-span-1  flex flex-col '>
              <div className='bg-blue-400 p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={Diet} alt='' />
              </div>
              <h1 className='text-center font-bold'>Diet planner</h1>
            </Link>
            <div className='col-span-1  flex flex-col '>
              <div className='bg-blue-400 p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={bmi} alt='' />
              </div>
              <h1 className='text-center font-bold'>BMI Calculator</h1>
            </div>
            <div className='col-span-1  flex flex-col '>
              <div className='bg-blue-400 p-3 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <img className='opacity-75' src={food} alt='' />
              </div>
              <h1 className='text-center font-bold'>Nutrition Calculator</h1>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Services
