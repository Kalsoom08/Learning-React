import React, { useState } from 'react'
// import '../src/App.css''

const App = () => {
    const [tempData, setTempData] = useState('');
    const [perData, setperData] = useState('');
   

    const handleChange = (event) =>
        {
            setTempData(event.target.value)
        }

    const handleData = () =>
        {
        setperData(tempData)
        }

  return (
    <div>
    <input 
    value={tempData}
    onChange={handleChange}
    type="text" />

    <button onClick={handleData}>Change Text</button>
    <h1>{perData}</h1>
    </div>
  )
}

export default App

// function App() {
//   let [renderName, setRenderName] = useState();
//   let [storeName, setStoreName] = useState('');

//  return (
//     <>
//     <div className='mainDiv'>
//      <input type="text"
//       placeholder='UserName'
//       value={storeName}
//       onChange={(event)=>{
//       setStoreName(event.target.value)
//       }} /> <br />

//      <h4>Hello: {renderName} </h4> 

//      <button onClick={()=>{
//      storeName.trim() === ""?
//       alert("Enter Name")
//      :
//       setRenderName(storeName);
//       setStoreName('')
//      }}>Render Data</button>

//      <button onClick={()=>{
//       setRenderName('')
//      }}>Clear Data</button>
//     </div>
    
//   </> )
// }
// export default App


