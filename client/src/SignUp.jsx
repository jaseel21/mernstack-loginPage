import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file
import axios from "axios"

const SignUp = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 const navigate=useNavigate()

  
  const handleSubmit=  (e)=>{
    e.preventDefault();
     axios.post('http://localhost:3001/signup', {name,email,password}

     ).then(result=> {
      console.log(result) 
    navigate("/login")
    }
  ) .catch(err=> console.log( err))

  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Your Password"
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login" >login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
