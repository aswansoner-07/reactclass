import React,{useRef} from 'react'

// for useRef

const RefForm = () => {
    const emailRef=useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(emailRef.current.value);
        // emailRef.current.value=null; // clear the input field
        emailRef.current.style.backgroundColor='red'; // change the background color of the input field
        emailRef.current.style={color:'white',backgroundColor:'blue'}; // change the background color of the input field
    }

    // controlled component: use state to manage form data
    //uncontrolled component: useRef to manage form data 
  

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-lg'>Ref Form</h1>
        <input className='border-2' type="email" name="email" id="email"  ref={emailRef} placeholder='enter email'/>
    
    <button className='border-2 p-2 bg-red-500 text-white' onClick={handleSubmit}>Submit</button>
    
    </div>
  )
}

export default RefForm