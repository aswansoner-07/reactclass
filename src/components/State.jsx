import React,{useState} from 'react'


// use state hook
const State = () => {
    const [count,setCount]=useState([52,96,45,32,78]);
    const [name,setName]=useState('anjali yadav')
    const [age,setAge]=useState(23);
    const [color,setColor]=useState('white')
    const [bgcolor,setBgColor]=useState('blue')
    const condition=false;

    const changeColor=()=>{
        setTimeout(()=>{
            setColor('red')
            setBgColor('green')
            setName('aswan')
        },2000)
      
    }

    const changeColor1=()=>{
        setTimeout(()=>{
            setColor('yellow')
            setBgColor('green')
            setName('aswan')
        },2000)
      
    }

    const colorCondition=condition?changeColor:changeColor1;


  return (
    <div>

        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{color}</h1>
        <h1 style={{color:`${color}`,backgroundColor:`${bgcolor}`}}>{JSON.stringify(count)}</h1>

        <br/>
       <button onClick={colorCondition}>Change color click</button>
       {/*   <button onMouseDown={changeColor}>Change color down</button>
        <button onMouseOut={changeColor}>Change color out</button>
        <button onMouseOver={changeColor}>Change color over</button> */}

        {/* <button onClick={()=>{setName('Hello by state')}}>Change color</button> */}

    </div>
  )
}

export default State