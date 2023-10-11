import React, { useEffect, useState } from 'react'
import { validation } from './validation'
export default function Signup() {
  const [data, setData] = useState({
    inputName: '',
    inputEmail: '',
    inputPassword: '',
    inputConfirm: '',
    inputCheckbox: false,
  })
  const [focus, setFocus] = useState({
    inputName: false,
    inputEmail: false,
    inputConfirm: false,
    inputPassword: false,
    inputCheckbox: false,
  })
  const [error, setError] = useState({})

  const changeInputHandler = (e) => {
    if (e.target.name == 'inputCheckbox') {
      setData({
        ...data, [e.target.name]: e.target.checked
      })

    } else {
      setData({
        ...data, [e.target.name]: e.target.value
      })
    }
  }

  const focusHandler = (e) => {
    setFocus({
      ...focus,[e.target.name]:true
    })
  }

  useEffect(() => {
    setError(validation(data))
  }, [data])

  return (
    <>
      <div className="container">
        <div className="singup">
          <h1>Sing Up</h1>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter Name...' onFocus={focusHandler} onChange={changeInputHandler} value={data.inputName} name='inputName' />
          {focus.inputName && error.name ? <span>{error.name}</span> : ""}

          <label htmlFor="email">Email</label>
          <input type="text" placeholder='Enter Email...' onFocus={focusHandler} onChange={changeInputHandler} value={data.inputEmail} name='inputEmail' />
          {focus.inputEmail && error.email ? <span>{error.email}</span> : ""}
          
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password...' onFocus={focusHandler} onChange={changeInputHandler} value={data.inputPassword} name='inputPassword' />
          {focus.inputPassword && error.password ? <span>{error.password}</span> : ""}

          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input type="password" placeholder='Enter Confirm Password...' onFocus={focusHandler} onChange={changeInputHandler} value={data.inputConfirm} name='inputConfirm' />
          {focus.inputConfirm && error.comfirm ? <span>{error.comfirm}</span> : ""}

          <div className='checkbox'>
            <label htmlFor="policy">accept terms of privacy policy</label>
            <input type="checkbox" id="policy" onFocus={focusHandler} onChange={changeInputHandler} value={data.inputCheckbox} name='inputCheckbox' />
            {focus.inputCheckbox && error.checkbox ? <span>{error.checkbox}</span> : ""}

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
