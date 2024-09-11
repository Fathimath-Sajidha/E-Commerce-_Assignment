
import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import JeweleryCard from './JeweleryCard'

function Jewelery() {
    const [products,setProducts]=useState([])
    const navigate=useNavigate()
     useEffect(()=>{
        getProducts()
        },[])
    const getProducts = () => {
      axios.get('https://fakestoreapi.com/products/category/jewelery').then(res => {
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
        {products.map((product,index)=><JeweleryCard product={product} key={index}/>)}
        </div>
  
    </div>
  )
}

export default Jewelery