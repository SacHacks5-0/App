import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="main">
      <div className="middle-container">
        <h2>Register</h2>
        <form>
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit" className="register" onClick={() => window.location.href = 'Homepage.js'}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
