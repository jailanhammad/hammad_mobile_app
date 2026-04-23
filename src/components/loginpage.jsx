import React from 'react';
import './loginpage.css';
import { NavLink } from "react-router-dom"; 
import logo from '../assets/login/logo.svg';
import email from '../assets/login/email.svg';
import pass from '../assets/login/pass.svg';
import eye from '../assets/login/eye.svg';
import google from '../assets/login/google.svg';
import apple from '../assets/login/apple.svg';

const LoginPage = () => {
    return ( 
        <>
        
      
        
        <div className="login-container">
      <div className="login-card">

        <div className="logo-2">
          <img src={logo} alt="logo"/>
        </div>

        <h1 className='welcomeback'>Welcome Back</h1>
        <p className="subtitle">Sign in to continue your journey</p>

<div className='inputs-22'>

        <h1 className='main-title'>Email</h1>        
        <div className="input-group">
          <span className="icon">
          <img src={email} alt="logo" />

        </span>
          <input type="email" placeholder="Enter your email" />
        </div>

        <h1 className='main-title'>Password</h1>        
        <div className="input-group">
          <span className="icon">
          <img src={pass} alt="logo" />

          </span>
          
          <input type="password" placeholder="Enter your password" />
          <span className="eye">
          <img src={eye} alt="logo" />

          </span>
        </div>

        <div className="forgot">Forgot Password?</div>
        
</div>

        <NavLink to="/home" end>
        <button className="signin-btn">Sign In</button>
        </NavLink>
{/* 
        <div className="divider">
          <span></span>
          <p>or continue with</p>
          <span></span>
        </div>

        <div className="social-buttons">
        <button className='btns'>
        <img src={google} alt="logo" />
            Google
        </button>
        </div> */}

        <p className="signup-text">
          Don't have an account? <span>Sign Up</span>
        </p>

        {/* <p className="support">Need help? Contact Support</p> */}
      </div>
    </div>
        
        
        
        
        
        </>
     );
}
 
export default LoginPage;