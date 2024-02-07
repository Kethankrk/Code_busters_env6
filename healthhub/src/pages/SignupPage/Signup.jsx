import React from 'react'
import logo from '../../assets/logo.png'

const Signup = () => {
  return (
    <div className='w-full h-screen flex-col flex justify-center items-center bg-gradient-to-r from-indigo-400 to-cyan-400'>
      <img src={logo} alt='' />
      <form className='flex flex-col gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-7 rounded-xl bg-white'>
        <h1 className='text-center font-bold text-2xl'>Sign up</h1>
        <div>
          <label for='name' className='block mb-2 text-sm'>
            Name
          </label>
          <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
          />
        </div>
        <div>
          <label for='phone' className='block mb-2 text-sm'>
            Phone Number
          </label>
          <input
            required
            type='number'
            name='phone'
            id='phone'
            placeholder='+91 ****** ****'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
          />
        </div>
        <div>
          <label for='Email' className='block mb-2 text-sm'>
            Email Address
          </label>
          <input
            required
            type='email'
            name='email'
            id='email'
            placeholder='abhi@email.com'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
          />
        </div>
        <div>
          <label for='birthdate' className='block mb-2 text-sm'>
            Date of birth
          </label>
          <input
            required
            type='date'
            name='birthdate'
            id='birthdate'
            placeholder='+91 ****** ****'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
          />
        </div>
        <div>
          <label for='address' className='block mb-2 text-sm'>
            Address
          </label>
          <input
            required
            type='text'
            name='address'
            id='address'
            placeholder='Enter your address'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
          />
        </div>
        <div>
          <label for='password' className='block mb-2 text-sm'>
            Password
          </label>
          <input
            required
            type='password'
            name='password'
            id='password'
            placeholder='******'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50'
          >
            Sign up
          </button>
          <p className='px-6 text-sm text-center text-gray-600'>
            Is you have an account already?
            <a
              rel='noopener noreferrer'
              href='#'
              className='hover:underline text-violet-600'
            >
              Sign in
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
