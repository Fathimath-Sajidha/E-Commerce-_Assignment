import React from 'react'
import WomensClothsCard from './WomensClothsCard'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function WomensClothes() {
    const [products,setProducts]=useState([])
    const navigate=useNavigate()
     useEffect(()=>{
        getProducts()
        },[])
    const getProducts = () => {
      axios.get("https://fakestoreapi.com/products/category/women's clothing").then(res => {
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
        {products.map((product,index)=><WomensClothsCard product={product} key={index}/>)}
        </div>
  
    </div>
  )
}

export default WomensClothes