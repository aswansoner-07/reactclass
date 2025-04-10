import React,{useState} from 'react';

const RefHook = () => {
    const [num ,setNum]=useState(0);
    
    const incre=()=>{
        setNum(num+5);
    }

    const decre=()=>{
        setNum(num-1);
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-lg'>{num}</h1>
        <br/>
        <br/>
        <div>
            <button className='border-2 p-2 bg-red-500 text-white' onClick={incre}>Increment</button>
            <button className='border-2 p-2 bg-blue-500 text-white' onClick={decre}>Decrement</button>
        </div>
    </div>
  )
}

export default RefHook