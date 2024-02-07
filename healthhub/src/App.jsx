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
import Nutrition from './pages/Nutrition/nutrition'
import Medicinedetails from './pages/MedicineDetails/medicinedetails'
import HelpPage from './pages/helpPage/helpPage'
import Bimpage from './pages/BIMpage/bimpage'
import ChatBot from './pages/Chatbot/chatBot'
import MedicalHistory from './pages/MedicalHistory/MedicalHistory'
import FecilitySearch from './pages/Fecilitysearch/fecilitySearch'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<HomePage />} />
            <Route path='service' element={<Services />} />
            <Route path='opbooking' element={<Opbooking />} />
            <Route path='dietplan' element={<Dietplan />} />
            <Route path='nuetrition' element={<Nutrition />} />
            <Route path='medicine' element={<Medicinedetails />} />
            <Route path='help' element={<HelpPage />} />
            <Route path='bim' element={<Bimpage />} />
            <Route path='bot' element={<ChatBot />} />
            <Route path='history' element={<MedicalHistory />} />
            <Route path='fecilitysearch' element={<FecilitySearch/>} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
