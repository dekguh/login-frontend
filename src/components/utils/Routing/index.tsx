import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../UI/pages/HomePage'
import LoginPage from '../../UI/pages/LoginPage'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<LoginPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing