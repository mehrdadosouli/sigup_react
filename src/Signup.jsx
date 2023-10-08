import React, { useEffect, useState } from 'react'
import validation from './Validation'
export default function Signup() {
    const [inputName,setName]=useState('')
    const [inputEmail,setEmail]=useState('')
    const [inputPassword,setPassword]=useState('')
    const [inputConfirm,setConfirm]=useState('')
    const [inputCheckbox,setCheckbox]=useState(false)
    
  return (
    <>
        <div className="container">
        <div className="singup">
        <h1>Sing Up</h1>
        <label htmlFor="name">Name</label>{inputName}
        <input type="text" placeholder='Enter Name...' onChange={(e)=>{setName(e.target.value);validation(inputName)}}  value={inputName}/>
        <label htmlFor="email">Email</label>{inputEmail}
        <input type="text" placeholder='Enter Email...' onChange={(e)=>setEmail(e.target.value)} value={inputEmail}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)} value={inputPassword} name='setPassword'/>

        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="password" placeholder='Enter Confirm Password...' onChange={(e)=>setConfirm(e.target.value)} value={inputConfirm} name='setConfirm'/>
        <div className='checkbox'>
          <label htmlFor="policy">accept terms of privacy policy</label>
          <input type="checkbox" id="policy" onChange={()=>setCheckbox(!inputCheckbox)} value={inputCheckbox} name='setCheckbox'/>
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
