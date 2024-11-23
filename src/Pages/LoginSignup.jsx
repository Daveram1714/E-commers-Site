import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign-up</h1>
        <div className="login_signupfileds">
          <input type="text"    placeholder='your name'/>
          <input type="email"    placeholder='your Email'/>
          <input type="Password"    placeholder='your password'/>
        </div>
        <button>Contine</button>
        <p className="loginsignup-login">Already have an Account <span>Login here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox"  name='' id=''/>
          <label for="">I agree to the terms and conditions</label>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup