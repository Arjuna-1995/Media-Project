import React from 'react'
import './Register.css'
export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Chatdue</h3>
                <span className='loginDesc'>
                    connect With friends and world around you on Chatdue
                </span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='UserName' className='loginInput'/>
                    <input placeholder='Email' className='loginInput'/>
                    <input placeholder='Password' className='loginInput'/>
                    <input placeholder='Correct Password' className='loginInput'/>
                    <button className='loginButton'>Sign Up</button>

                    <button className='loginRegisterButton'>Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
