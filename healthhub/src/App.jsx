import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/servicesPage/Services'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/service' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
