import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/servicesPage/Services'
import LoginPage from './pages/loginpage/loginPage'
import Signup from './pages/SignupPage/Signup'
import Layout from './components/layout'
import Opbooking from './pages/opBooking/Opbooking'
import Dietplan from './pages/Dietplan/Dietplan'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}> 
          <Route path='' element={<HomePage/>}/>
          <Route path='service' element={<Services />} />
          <Route path='opbooking' element={<Opbooking/>}/>
          <Route path='dietplan' element={<Dietplan/>}/>
          
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<LoginPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
