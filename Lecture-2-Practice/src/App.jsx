import React, { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState(
  {
      name: '',
      email: '',
      password: ""
  }
  );

  const handleName = (event)=>{setUserData({...userData, name: event.target.value})}

  const handleEmail = (event)=>{setUserData({...userData, email: event.target.value})}

  const handlePassword = (event)=>{setUserData({...userData, password: event.target.value})}
 
  const handleForm = (event)=>{
    event.preventDefault();
    console.log(userData);
  
    if (userData.name == "" || userData.email == "" || userData.password == "") {
      alert("Invalid input, please check the requirements");
    
    }

    setUserData(
      {
        name: "",
        email: "",
        password: ""
      }
   )}

  return (
    <div className='grid justify-center align-middle mt-36' >

    <form  onSubmit={handleForm}
    className='border grid rounded-lg w-96 bg-slate-100 shadow-sm shadow-gray-500'>

      <legend className='text-center font-bold text-[28px]'>Form</legend>

      <div className='grid m-3 '>
      <label htmlFor="name">Name</label> 
      <input className='border border-black py-1 px-3' 
        onChange={handleName}
       type="text" />
      </div>

      <div className='grid m-3 '>
        <label htmlFor="email">Email</label>
        <input  className='border border-black py-1 px-3' 
        onChange={handleEmail}
        type="email" />
      </div>

      <div className='grid m-3 '>
        <label htmlFor="password">Password</label>
        <input  className='border border-black py-1 px-3' 
        onChange={handlePassword}
        type="password" />
      </div>
  
      <button  className='py-2 ml-28 mr-28 rounded-md  border  border-black' >Submit </button>
    </form>
    </div>
  );
};

export default App;