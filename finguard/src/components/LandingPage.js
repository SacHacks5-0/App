import React from 'react'
import './LandingPage.css'
function LandingPage(){

  return (
    <div className="main">
        <div className="middle-container">
            <div className="contents">
                <h1>FinGuard</h1>
                <h3>Every choice counts for a financially sustainable future</h3>
                <div className="btn-loc">
                    
                  <button className="register" onClick={() => window.location.href = 'register.js'}>Register</button>
                  
                  <button className="login" onClick={() => window.location.href = 'login.js'}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;
