import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../Components/Products/ProductCard';
import './Home.css'
import { ProductContext } from '../../App';

function Home() {
    const {products,setProducts}=useContext(ProductContext)
    const navigate=useNavigate()
     useEffect(()=>{
        getProducts()
        },[])
    const getProducts = () => {
      axios.get('https://fakestoreapi.com/products').then(res => {
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
        {products.map((product,index)=><ProductCard product={product} key={index}/>)}
        </div>
  
    </div>
  )
}

export default Home