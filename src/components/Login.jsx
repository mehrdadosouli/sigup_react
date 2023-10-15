import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css'
const Login = () => {
    return (
        <>
            <div className="container">
                <ToastContainer />
                <form className="singup">
                    <h1>Sing Up</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Name...' className={(focus.inputName && error.name) ? "errorinput" : "successinput"} onFocus={focusHandler} onChange={changeInputHandler} value={data.inputName} name='inputName' />
                    {focus.inputName && error.name ? <span className='span'>{error.name}</span> : ""}

                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Enter Email...' className={(focus.inputEmail && error.email) ? "errorinput" : 'successinput'} onFocus={focusHandler} onChange={changeInputHandler} value={data.inputEmail} name='inputEmail' />
                    {focus.inputEmail && error.email ? <span className='span'>{error.email}</span> : ""}

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password...' className={(focus.inputPassword && error.password) ? "errorinput" : 'successinput'} onFocus={focusHandler} onChange={changeInputHandler} value={data.inputPassword} name='inputPassword' />
                    {focus.inputPassword && error.password ? <span className='span'>{error.password}</span> : ""}

                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" placeholder='Enter Confirm Password...' className={(focus.inputConfirm && error.comfirm) ? "errorinput" : 'successinput'} onFocus={focusHandler} onChange={changeInputHandler} value={data.inputConfirm} name='inputConfirm' />
                    {focus.inputConfirm && error.comfirm ? <span className='span'>{error.comfirm}</span> : ""}

                    <div className='checkbox'>
                        <label htmlFor="policy">accept terms of privacy policy</label>
                        <input type="checkbox" id="policy" onFocus={focusHandler} onChange={changeInputHandler} value={data.inputCheckbox} name='inputCheckbox' />
                        {focus.inputCheckbox && error.checkbox ? <span className='span'>{error.checkbox}</span> : ""}

                    </div>
                    <div className="btns">
                        <span>Login</span>
                        <button>Sing Up</button>
                    </div>
                    <input type="submit" value="Submit" onClick={submitHandler} />
                </form>
            </div>
        </>
    );
};

export default Login;