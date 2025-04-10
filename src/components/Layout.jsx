import React,{useEffect, useLayoutEffect} from 'react'

const Layout = () => {

    //useEffect is called after render
    useEffect(()=>{
        document.title="effect"
        document.body.style.backgroundColor="blue" 
    },[]);


    //before render useLayoutEffect is called
    useLayoutEffect(()=>{
        document.title="Layout"
        document.body.style.backgroundColor="red" 
    },[]);
  return (
    <div>Layout</div>
  )
}

export default Layout