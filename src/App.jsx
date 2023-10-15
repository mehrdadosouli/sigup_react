import React from 'react'
import "./App.css"
import Signup from "./components/Signup"
import Login from "./components/Login"
import {Route , Routes ,Navigate } from 'react-router-dom'
export default function App() {
   
  return (
    <>

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Navigate to='/signup' />} />
    </Routes>
    </>
  )
}
