import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../components/BottomNav'
import TopNavbar from '../../components/TopNavbar'
import Tiket from '../../assets/ticket.png'
import medicineIcon from '../../assets/medicine.png'
import searchIcon from '../../assets/searchicon.gif'
import SimpleImageSlider from 'react-simple-image-slider'
import landingSvg from '../../assets/landing.svg'

import bmi from '../../assets/bmi.png'
import food from '../../assets/foodicon.png'

const HomePage = () => {
  const images = [
    { url: 'https://medlineplus.gov/images/Medicines_share.jpg' },
    { url: 'images/2.jpg' },
    { url: 'images/3.jpg' },
    { url: 'images/4.jpg' },
    { url: 'images/5.jpg' },
    { url: 'images/6.jpg' },
    { url: 'images/7.jpg' },
  ]
  return (
  
      

      <div className='px-4 flex flex-col items-center pb-28'>
        <img src={landingSvg} alt='' className='mt-5' />

        <div className='w-full flex gap-4 flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
          <div className='flex items-center gap-2'>
            {' '}
            <img src={Tiket} alt='' className='h-12' />
            <div className=''>
              <h1 className='font-bold text-lg'>Book OP Ticket</h1>
              <h1 className=' text-sm opacity-60'>
                Search & book your OP tickets
              </h1>
            </div>
          </div>

          <Link
            to='/opbooking'
            className='w-full bg-blue-500 py-2 text-white text-center rounded-full font-bold  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
          >
            Search
          </Link>
        </div>

        <div className='w-full grid grid-cols-2 gap-5 mt-5 '>
          <div className='col-span-1 p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl flex flex-col  '>
            <div className='w-full flex justify-center'>
              <img src={food} alt='' className='w-1/2' />
            </div>
            <div className=''>
              <h1 className='font-bold text-lg'>Nutrition Calculator</h1>
              <h1 className=' text-sm opacity-60'>
                Find the micro and the macro in your food.
              </h1>
            </div>
          </div>
          <div className='col-span-1 p-3  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-2xl flex flex-col  '>
            <div className='w-full flex justify-center'>
              <img src={bmi} alt='' className='w-1/2' />
            </div>
            <div className=''>
              <h1 className='font-bold text-lg'>Calculate BMI</h1>
              <h1 className=' text-sm opacity-60'>
                Calculate your body mass index.
              </h1>
            </div>
          </div>
        </div>
        <div className='w-full flex gap-5 flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'>
          <div className='flex items-center gap-2'>
            {' '}
            <img src={medicineIcon} alt='' className='h-12 ' />
            <div className=''>
              <h1 className='font-bold text-lg'>Explore Medicine Details</h1>
              <h1 className=' text-sm opacity-60'>
                Search & know about your medicine
              </h1>
            </div>
          </div>

          <form className='flex  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-3 rounded-full gap-1'>
            <input
              type='text'
              placeholder='Search the medicine'
              className='w-full outline-none'
            />{' '}
            <button className='w-8'>
              <img src={searchIcon} alt='' />
            </button>
          </form>
        </div>
        {/* <div className="w-full mt-7 rounded-xl">
     <SimpleImageSlider

        width={window.innerWidth - 35}
        height={200}
        images={images}
        showBullets={true}
        autoPlay={true}
        // showNavs={true}
      />
     </div> */}
      </div>


     
  )
}

export default HomePage
