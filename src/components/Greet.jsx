import React from "react";
import Demo from "./Demo";
class Greet extends React.Component{

    constructor(){
        super();
        this.state={color:'red',name:'anjali',age:23}
        console.log("constructor method..")
    }

    //for change color using button click
     changeColor=()=>{
        this.setState({color:'green',name:'aswan'});
     }


     componentDidMount(){
        console.log("cdm")
        setTimeout(()=>{
            this.setState({color:'blue',name:'rrr'});
        },2000)
     }

     componentDidUpdate(){
        console.log('component did update...');
     }

     componentWillUnmount(){
        console.log('will unmount....')
     }
 
    render(){
        console.log("rendor method...")
        return(
            <div style={{color:this.state.color}}>
                <Demo/>
            <h1 id="">Hello {this.state.name} by class component {this.state.age} </h1>
            <div>{this.state.name}</div>
            <button onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}

export default Greet