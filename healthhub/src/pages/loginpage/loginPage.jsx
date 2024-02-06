import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const [number, setNumber] = useState('')
  const [password, setpassword] = useState('')
  const navigation = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!number || !password) return
      const data = {
        phone: number,
        password,
      }
      const tokens = await (
        await axios.post('http://localhost:8000/login/', data)
      ).data
      const accessToken = tokens.access
      localStorage.setItem('token', accessToken)
      console.log(accessToken)
      navigation('/')
    } catch (error) {
      console.log(error)
      alert('something went wrong')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigation('/')
    }
  }, [])
  return (
    <div className='w-full h-screen flex-col flex justify-center items-center bg-gradient-to-r from-indigo-400 to-cyan-400'>
      <img src={logo} alt='' />
      <form
        className='flex flex-col gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-7 rounded-xl bg-white'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center font-bold text-2xl'>Sign in</h1>
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
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <div>
          <div className='flex justify-between mb-2'>
            <label for='password' className='text-sm'>
              Password
            </label>
            <a
              rel='noopener noreferrer'
              href='#'
              className='text-xs hover:underline text-gray-600'
            >
              Forgot password?
            </a>
          </div>
          <input
            required
            type='password'
            name='password'
            id='password'
            placeholder='*****'
            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800'
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50'
          >
            Sign in
          </button>
        </div>
        <p className='px-6 text-sm text-center text-gray-600'>
          Don't have an account yet?
          <a
            rel='noopener noreferrer'
            href='#'
            className='hover:underline text-violet-600'
          >
            Sign up
          </a>
          .
        </p>
      </form>
    </div>
  )
}

export default LoginPage
