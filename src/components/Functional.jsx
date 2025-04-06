import React from "react";

// const Functional=(props)=>{

//     return (
//          <div>
//             <h1>hello from {props.name} component...</h1>
//             <h2>{JSON.stringify(props.data)}</h2>
//          </div>
//     );

// }

const Functional=({name,data,arr})=>{

    return (
         <div>
            <h1>hello from {name} component...</h1>
            <h2>{JSON.stringify(data)}</h2>
            <h3>{arr}</h3>
         </div>
    );

}

export default Functional;