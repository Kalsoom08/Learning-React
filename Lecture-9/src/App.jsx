import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'


// const App = () => {
//   const dispatch = useDispatch();
//   const count = useSelector(state => state.count);

//   const handleIncrement = () => dispatch({type: 'INC',})
//   const handleDecrement = () => dispatch({type: 'DEC',})
//   const Incremenet = ()=> dispatch({type: 'INC-BY-AMOUNT', payload: incByAmount})

//   const [incByAmount, setIncByAmount] = useState(0);
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="flex gap-2">
//       <h1 className="px-12 bg-red-200 border border-black rounded-lg mb-5 text-center">{count}</h1>
//       <input className="border border-black rounded-lg mb-5 text-center" 
//        type="text" 
//       onChange={(e)=>setIncByAmount(e.target.value)}
//       />
//       </div>
      
  
//       <div className="flex gap-2">
//       <button className="border px-5  py-1 border-black rounded-lg" 
//       onClick={handleIncrement}>+</button>
//       <button className="border px-5  py-1 border-black rounded-lg" 
//       onClick={handleDecrement}>-</button>

//       <button className="border px-5  py-1 border-black rounded-lg"
//       onClick={Incremenet} >
//         Increment by Amount
//       </button>
//       </div>
      
//     </div>
//   )
// }

// export default App



const App = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.text);
  const handleText = ()=>{
    dispatch({type: "Change-Text", payload: handledata})
    setHandleData('')
}

  const [handledata, setHandleData]= useState('');

  
  return (
    <div>
     
      <h1>{text}</h1>
      <input  
      value={handledata}
      className="border border-black rounded-lg mb-5 text-center"
      onChange={(e)=>setHandleData(e.target.value)}
      type="text" 
       />

       <button onClick={handleText}>Change Text</button>

    </div>
  )
}

export default App