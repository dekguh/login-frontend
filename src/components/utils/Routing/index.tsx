import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../../UI/pages/LoginPage'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing