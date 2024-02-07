import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import axios from 'axios'

const Signup = () => {
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [Address, setAddress] = useState('')
  const [Date, setDate] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [isloading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if ((!Name, !Password, !Address, !Date, !Phone, !Email)) return

    const userData = {
      name: Name,
      password: Password,
      address: Address,
      date_of_birth: Date,
      phone: Phone,
      email: Email,
      role: 'patient',
    }
    const api = import.meta.env.VITE_API

    const res = await axios.post(`${api}api/signup/`, userData)
    const userId = res.data.id
    userData['user'] = userId

    const profile = await axios.post(`${api}api/patient/profile/`, userData)
    console.log(profile.data)
    console.log(res.data)
    const cred = {
      phone: Phone,
      password: Password,
    }
    const tokens = await (await axios.post(`${api}login/`, cred)).data
    localStorage.setItem('token', tokens.access)
    localStorage.setItem('refreshToken', tokens.refresh)
    localStorage.setItem('name', Name)
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isloading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-center font-semibold text-2xl'>Loading</p>
      </div>
    )
  }
  return (
    <div className='w-full h-screen flex-col flex justify-center items-center bg-gradient-to-r from-indigo-400 to-cyan-400'>
      <img src={logo} alt='' />
      <form
        className='flex flex-col gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-7 rounded-xl bg-white'
        onSubmit={handleSubmit}
      >
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
            onChange={(e) => setName(e.target.value)}
            value={Name}
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
            onChange={(e) => setPhone(e.target.value)}
            value={Phone}
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
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
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
            onChange={(e) => setDate(e.target.value)}
            value={Date}
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
            onChange={(e) => setAddress(e.target.value)}
            value={Address}
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
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
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
            <Link to="/signin"
              className='hover:underline text-violet-600'
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
