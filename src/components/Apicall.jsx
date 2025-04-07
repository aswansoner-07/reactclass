import React,{useState,useEffect} from 'react'

const Apicall = () => {
    const [data,setData]=useState([])

    //https://dummyjson.com/products
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((apidata)=>setData(apidata))
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    console.log(data)
  return (
    <div>
        {
            data.map((produ)=>{
                return <div>

                    </div>
            })
        }
    </div>
  )
}

export default Apicall