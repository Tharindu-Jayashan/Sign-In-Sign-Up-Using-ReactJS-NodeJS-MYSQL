import Axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {

  const[email, setEmai]=useState();
  const[password, setPassword]=useState();

  const handleSubmit=()=>{
    Axios.post('http://localhost:3002/signIn',{
    
      email:email,
      password:password
    })
    
  }

  return (
    <div>
        <h1>SignIn</h1>
        <div>
            <label>Enter your Email </label>
            <br/>
            <input type='text'onChange={(e)=>{setEmai(e.target.value)}}/>
        </div>
        <div>
            <label>Enter your Password : </label>
            <br/>
            <input type='password'onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button onClick={()=>{handleSubmit()}}>Login</button>
        <br/>
        <Link to='/signUp'>Don't have an account? </Link>
    </div>
  )
}
