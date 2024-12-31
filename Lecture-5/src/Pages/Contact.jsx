// // Controlled form handeling
// import React from 'react'
// import { useState } from 'react';

// const Contact = () => {
//   const [userData, setUserData] = useState(
//     {
//         username: '',
//         email: '',
//         password: ""
//     }
//     );

//     const hadleChange = (event) =>{
//       const {name, value} = event.target;
//       setUserData((prev)=>({...prev, [name]: value}))
//     }
   
//     const handleForm = (event)=>{
//       event.preventDefault();
//       console.log(userData);
    
//       if (userData.name == "" || userData.email == "" || userData.password == "") {
//         alert("Invalid input, please check the requirements");
      
//       }


//      setUserData({
//       username: '',
//       email: '',
//       password: ''
//     });
//   };

  
//     return (
//       <div className='grid justify-center align-middle mt-36' >
  
//       <form  onSubmit={handleForm}
//       className='border grid rounded-lg w-96 bg-slate-100 shadow-sm shadow-gray-500'>
  
//         <legend className='text-center font-bold text-[28px]'>Form</legend>
  
//         <div className='grid m-3 '>
//         <label htmlFor="name">Name</label> 

//         <input className='border border-black py-1 px-3' 
//           onChange={hadleChange}
//           name='username'
//           value={userData.username}
//          type="text" />
//         </div>
  
//         <div className='grid m-3 '>
//           <label htmlFor="email">Email</label>

//           <input  className='border border-black py-1 px-3' 
//           onChange={hadleChange}
//           name='email'
//           value={userData.email}
//           type="email" />
//         </div>
  
//         <div className='grid m-3 '>
//           <label htmlFor="password">Password</label>

//           <input  className='border border-black py-1 px-3' 
//           onChange={hadleChange}
//            name='password'
//            value={userData.password}
//           type="password" />
//         </div>
    
//         <button  className='py-2 ml-28 mr-28 rounded-md  border  border-black' >Submit </button>
//       </form>
//       </div>
//     );
//   };
  

// export default Contact

// Uncontrolled Component
import React, { useRef } from 'react';
const UncontrolledForm = () => {
const inputRef = useRef(null);
const emailRef = useRef(null) 

const handleSubmit = (e) => {
e.preventDefault();
console.log('Input Value:', inputRef.current.value);
console.log('Input Value:', emailRef.current.value);
};


return (

<div className='flex justify-center align-middle '>
<form  className='border grid justify-center align-middle gap-5 py-2 border-blue-300 w-60 mt-48 rounded-lg '
onSubmit={handleSubmit}>

<label htmlFor="name">UserName:</label>
<input className='border-b border-black rounded-md px-2'
 type="text" 
ref={inputRef}
placeholder="Enter your name" />


<label htmlFor="email">Email:</label> 
<input className='border-b border-black rounded-md px-2'
type='email'
ref={emailRef}
placeholder='Email'
/>

<button className='bg-slate-500 text-white rounded-sm py-1 mb-3'
type="submit">Submit</button>

</form>
</div>
);
};
export default UncontrolledForm;

