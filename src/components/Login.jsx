import React,{useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css'
import { validation } from './validation';
import { Link } from 'react-router-dom';
const Login = () => {
    const [data, setData] = useState({
        inputEmail: '',
        inputPassword: '',   
      })
      const [focus, setFocus] = useState({
        inputEmail: false,
        inputPassword: false,
      })
      const [error, setError] = useState({})
      
    const focusHandler=(e)=>{
        setFocus({
            ...focus,[e.target.name]:true
        })
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if(!Object.keys(error).length){
            toast('ok')
        }else{
            toast('not ok')
        }
    }
    const changeInputHandler=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        setError(validation(data,'login'))
    },[data])

    return (
        <>
            <div className="container">
                <ToastContainer />
                <form className="singup">
                    <h1>Login</h1>
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Enter Email...' className={(focus.inputEmail && error.email) ? "errorinput" : 'successinput'} onFocus={focusHandler} onChange={changeInputHandler} value={data.inputEmail} name='inputEmail' />
                    {focus.inputEmail && error.email ? <span className='span'>{error.email}</span> : ""}

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password...' className={(focus.inputPassword && error.password) ? "errorinput" : 'successinput'} onFocus={focusHandler} onChange={changeInputHandler} value={data.inputPassword} name='inputPassword' />
                    {focus.inputPassword && error.password ? <span className='span'>{error.password}</span> : ""}

                    <div className="btns">
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                    <input type="submit" value="Submit" onClick={submitHandler} />
                </form>
            </div>
        </>
    );
};

export default Login;