import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'

export default function SignUp() {

  const[firstName, setFirstName]=useState();
  const[lastName, setLastName]=useState();
  const[email, setEmail]=useState();
  const[password, setPassword]=useState();

  const handleSubmit=()=>{
    Axios.post('http://localhost:3002/signUp',{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    })
    
  }

  return (
    <div>
        <h1>Sign up</h1>
        <div>
            <label>First Name</label>
            <br/>
            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div>
            <label>Last Name</label>
            <br/>
            <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <div>
            <label>Email</label>
            <br/>
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <label>Password</label>
            <br/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button onClick={()=>{handleSubmit()}}>SUBMIT</button>
        <br/>
        <Link to='/'>Already have an account? </Link>
        
    </div>
  )
}
