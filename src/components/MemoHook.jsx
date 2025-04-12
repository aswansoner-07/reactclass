import React,{useState,useMemo} from 'react';
import useCounter from './useCounter';

const MemoHook = () => {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');
    
    const square = useMemo(() => {
        console.log('Calculating square...',number);
        setText(`Calculating square...${number}`)
        return number * number;
    }, [number]);


    //use counter
    const {count,increment,decrement}=useCounter(0);

  return (
    <div>
        <h1 className='text-lg'>Memo Hook</h1>
        <p>Memo Hook is used to optimize performance by memoizing the result of a function call. It is used to prevent unnecessary re-renders of components.</p>
        <p>It is similar to useMemo and useCallback, but it is used to memoize the result of a function call instead of a value or a callback function.</p>
        <p>It is useful when you have a function that takes a long time to compute and you want to avoid re-computing it on every render.</p>
   
   <br/>

   <input type="number"  onChange={(e) => setNumber(e.target.value)} placeholder='Enter a number' className='border-2'/>

   <br/>
       <h1>Number:{number}</h1>
       <h1>
        {text}
        <br/>Square:{square}</h1>

         <h1>Custom hook implementation</h1>

            <h1>Count:{count}</h1>

            <button className='border-2 p-2 bg-green-500 text-white' onClick={increment}>Increment</button>   
            <button className='border-2 p-2 bg-red-500 text-white' onClick={decrement}>Decrement</button>

    </div>
  )
}

export default MemoHook