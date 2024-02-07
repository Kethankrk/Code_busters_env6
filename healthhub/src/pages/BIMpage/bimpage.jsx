import React, { useReducer, useState } from 'react'
import bmi from '../../assets/bmi.png'

const Bimpage = () => {
  const [height, SetHeight] = useState('')
  const [weight, SetWeight] = useState('')
  const [result, SetResult] = useState('')

  const submit = (e) => {
    e.preventDefault()
    SetResult((weight / (height * height)) * 10000)
  }
  return (
    <div className='px-4 flex flex-col items-center pb-28'>
      <form
        onSubmit={submit}
        className='w-full flex  flex-col p-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-5 rounded-3xl'
      >
        <div className='flex items-center gap-3'>
          <img src={bmi} alt='' className='w-16' />
          <div className=''>
            <h1 className='font-bold text-2xl'>BMI calculator</h1>
            <p> Calculate Your Body Mass Index </p>
          </div>
        </div>
        <h1 className='font-bold text-lg mt-3'>Enter your weight</h1>
        <input
          required
          type='number'
          placeholder='Height in CM'
          value={height}
          onChange={(e) => SetHeight(e.target.value)}
          className='w-full bg-white outline-none h-10 placeholder:text-black border rounded-xl px-2 '
        />
        <h1 className='font-bold text-lg mt-3'>Enter your weight</h1>
        <input
          required
          value={weight}
          onChange={(e) => SetWeight(e.target.value)}
          type='number'
          placeholder='Weight in KG'
          className='w-full bg-white outline-none h-10 placeholder:text-black border rounded-xl px-2 '
        />
        <button
          type='submit'
          className='w-full mt-5 bg-blue-500 py-2 text-white text-center rounded-full font-bold  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
        >
          Calculate
        </button>

        <div className='flex justify-center mt-5 gap-5'>
          <div className='flex flex-col items-center w-10  '>
            <div className='bg-yellow-300 w-5 h-5'></div>
            <h1 className='text-sm  text-center'>Under weight</h1>
          </div>
          <div className='flex flex-col items-center w-10  '>
            <div className='bg-green-500 w-5 h-5'></div>
            <h1 className='text-sm'>Healthy</h1>
          </div>
          <div className='flex flex-col items-center w-10  '>
            <div className='bg-orange-500 w-5 h-5'></div>
            <h1 className='text-sm text-center'>Over weight</h1>
          </div>
        </div>
        {result != null ? (
          <p className='mt-4 flex items-center gap-3'>
            <span className='font-bold '>Body Mass Index:</span>{' '}
            {result < 14 ? (
              <div className='bg-yellow-300 w-5 h-5'></div>
            ) : result > 25 ? (
              <div className='bg-orange-500 w-5 h-5'></div>
            ) : (
              <div className='bg-green-500 w-5 h-5'></div>
            )}
            {Number(result).toFixed(2)}
          </p>
        ) : (
          <p> </p>
        )}
      </form>
    </div>
  )
}

export default Bimpage
