import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-main">
      <div className="middle-container">
        <h1>Login</h1>
        <div className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="login" onClick={() => window.location.href = 'Homepage.js'}>Login</button>
          <a href="">Forgot Password</a>
        </div>
      </div>
    </div>
  )
}

export default Login;
