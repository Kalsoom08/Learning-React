import React from 'react'
import CounterOutput from './CounterOutput'
import { useState } from 'react'
import { useEffect } from 'react'


const CounterUI = () => {
    const [counter, setCounter] = useState(0)
    
    
    

  return (
    <>
    <div className="flex justify-center">
        <button 
        className='border border-black px-5 py-2 m-2 rounded-md h-12 mt-56 hover:bg-emerald-700 hover:text-white hover:border-none'
             onClick={() => {
            if (counter < 0) {
              setCounter(counter);
            } else {
              setCounter(counter + 1);
            }
          }}
        >Increment</button>

        <button 
        className='border border-black px-5 py-2 m-2 rounded-md h-12 mt-56  hover:bg-emerald-700 hover:text-white hover:border-none'
        onClick={()=> setCounter(counter - 1)}
        >Decrement</button>
    </div>

    <CounterOutput output={counter}/>
    </>
  )
}

export default CounterUI