import React, { useState } from 'react'
import '../../src/App.css'

const Login = ()=> {
 const [userData, setUserData] = useState({

    email: '',
    password: ''
 }
 )

 const handleChangeEmail = (event)=>{
  setUserData({...userData, email: event.target.value})
  }

  const handleChangePassword = (event)=>{
    setUserData({...userData, password: event.target.value})
    console.log( setUserData({...userData, password: event.target.value}));
  };

  const handleForm = ()=>{
    const {email, password} = userData

    if(email.trim().length === 0){
      alert("Fill Email");
      return;
    }
    if(password.trim().length === 0){
      alert("Fill Password");
      return
    }

    setUserData({
      email: "",
      password: ""
    })
  }

  return (
  <div  className='form'>
  
    <div>
    <label htmlFor="email">Email</label>

    <input 
     value={userData.email}
     type="email"
     onChange={handleChangeEmail}
     className='border border-black'
    />
    </div>


    <div>
      <label htmlFor="password">Password</label>

      <input 
       type= "password"
       value={userData.password}
       onChange={handleChangePassword}
       className='border border-black'
      />
    </div>
    
    <button 
    className='border border-black'
    onClick={handleForm}
    >Submit</button>
  
  </div>
  )
}

export default Login