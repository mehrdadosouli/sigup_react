import React from 'react'
import "./App.css"
export default function App() {
  return (
    <>
      <div className="container">
        <div className="singup">
        <h1>Sing Up</h1>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Name...' />

        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Enter Email...' />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Password...' />

        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="password" placeholder='Enter Confirm Password...' />
        <div className='checkbox'>
          <label htmlFor="policy">accept terms of privacy policy</label>
          <input type="checkbox" name="policy" id="policy" />
        </div>
        <div className="btns">
          <span>Login</span>
          <button>Sing Up</button>
        </div>
        </div>
      </div>
    </>
  )
}
