import React,{useState,useEffect} from 'react'

const Apicall = () => {
    const [data,setData]=useState([])

    //https://dummyjson.com/products
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((apidata)=>setData(apidata))
        .catch((err)=>{
            console.log(err)
        })
    },[]);

    console.log(data)
  return (
    <div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
        {
            data.map((product)=>{
                return <div className='w-[400px] h-[450px] border-2 border-amber-900' key={product.id}>

                    <img src={product.image} alt={product.title} className='w-[300px] h-[250px]' />
                    <h1>{product.title}</h1>
                   
                    <p>{product.price}</p>
                    <p>{product.rating.rate}</p>
                    <p className='truncate'>{product.description}</p>
                    <button className='m-8 bg-blue-500 p-2 rounded-md text-white hover:bg-amber-400'>Order now</button>
                    </div>
            })
        }
        </div>
    </div>
  )
}

export default Apicall