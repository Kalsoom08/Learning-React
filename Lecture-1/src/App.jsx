import React, { useState } from 'react'

function App() {
  let [msg, setMsg] = useState('This is my Real State');
  // let changeText = ()=>{
  //   setMsg("This is my state After setMsg")
  // }
  
  const [userName, setUserName] = useState();

  const [storeName, setStorename] = useState();

  return (
    <>
     <h1>{msg}</h1> 
     {/* <button onClick={changeText}>Change Text</button> */}
     {/* OR */}
      <button onClick={()=>{setMsg("This is my state After setMsg")}}>Change Text</button>

      <p>Name: {userName}</p>
    <input type="text" 
    onChange={(event)=>{
     setStorename(event.target.value)
    }}
    />

    <button onClick={()=>{
      setUserName(storeName)
    }}>Set Name</button>
     
    </>
  )
}

export default App


