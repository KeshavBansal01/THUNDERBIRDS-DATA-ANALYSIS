import profile from '../../img/a.png'
import email from '../../img/email.jpg'
import pass from '../../img/pass.png'
import './Login.css'
import React from 'react'
import {link, useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const loggedin = () => {
//  alert("jii")
    navigate("/Afterlogin")
  }
  return (
    <div className="main">
      <div className= "sub-main">
        <div>
          <div className="imgs">
          <div className="container-image"  >
            <img src={profile} alt= "profile" className="profile"></img>
          </div>
          </div>
          <div>
            <h1>Login page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="username" className="name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type="text" placeholder="Password" className="name"/>
            </div>
            <div className="login-button">
            <button onClick={loggedin}>Login</button> 
            </div>
           
              <p className="link"> 
                {/* <a href="#">Forget password</a> or*/} <a href="#">Sign Up</a> 
              </p>
            
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Login
