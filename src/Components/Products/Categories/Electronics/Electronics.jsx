import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ElectronicsCard from './ElectronicsCard'

function Electronics() {
    const [products,setProducts]=useState([])
    const navigate=useNavigate()
     useEffect(()=>{
        getProducts()
        },[])
    const getProducts = () => {
      axios.get('https://fakestoreapi.com/products/category/electronics').then(res => {
        console.log(res);
        setProducts(res.data)
      })
        .catch((err)=>{
          navigate('/')
  
        })
      
    }
  return (
    
    <div>
      
      
        <div className='all-container'>
        {products.map((product,index)=><ElectronicsCard product={product} key={index}/>)}
        </div>
  
    </div>
  )
}


export default Electronics