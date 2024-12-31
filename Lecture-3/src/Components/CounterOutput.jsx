import React from 'react'

const CounterOutput = ({output}) => {
  return (
    <>
    <div className='flex justify-center mt-4  ' >
    <span className='text-[30px] border border-black px-8 rounded-lg'>{output}</span>
    </div>
    </>
  )
}

export default CounterOutput