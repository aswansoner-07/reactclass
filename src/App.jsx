import React,{useState} from 'react'
// import Greet from './components/Greet'
// import Demo from './components/Demo'
import Functional from './components/Functional'
import Data from './components/Data'
import State from './components/State'
import Func from './components/Func'
import Apicall from './components/Apicall'

const App = () => {
  const obj={
    name:'anjali',
    age:28,
    branch:'cse'

  }

  const [condition,setCondition]=useState(true)

  const ar=[45,63,85]
  return (
    <div>
      {/* <State/> */}
      {
        condition?<State/>:<Func/>
      }

      <Apicall/>
      {/* <Demo/> */}
      {/* <h1>App</h1>
      <Functional name={'Anjali yadav'} data={obj} arr={ar}/>
      <Data /> */}
     
      {/* <Greet /> */}
    </div>

  )
}

export default App
