import React, { useEffect, useState } from 'react'
import validation from './Validation'
export default function Signup() {
  const [data,setData]=useState({
    inputName:'',
    inputEmail:'',
    inputPassword:'',
    inputConfirm:'',
    inputCheckbox:false,
  })
    
    const changeInputHandler=(e)=>{
      if(e.target.name=='inputCheckbox'){
        setData({
          ...data,[e.target.name]:e.target.checked
        })

      }else{
        setData({
        ...data,[e.target.name]:e.target.value
        })
      }
    }
  return (
    <>
        <div className="container">
        <div className="singup">
        <h1>Sing Up</h1>
        <label htmlFor="name">Name</label>{data.inputName}
        <input type="text" placeholder='Enter Name...' onChange={changeInputHandler}  value={data.inputName} name='inputName' />

        <label htmlFor="email">Email</label>{data.inputEmail}
        <input type="text" placeholder='Enter Email...' onChange={changeInputHandler} value={data.inputEmail} name='inputEmail' />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Password...' onChange={changeInputHandler} value={data.inputPassword} name='inputPassword'/>

        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="password" placeholder='Enter Confirm Password...' onChange={changeInputHandler} value={data.inputConfirm} name='inputConfirm'/>

        <div className='checkbox'>
          <label htmlFor="policy">accept terms of privacy policy</label>
          <input type="checkbox" id="policy" onChange={changeInputHandler} value={data.inputCheckbox} name='inputCheckbox'/>
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
