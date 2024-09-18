import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../Redux/store'
import { setCartCount,setCartItems } from '../../Redux/CartSlice'

function Cart() {
    const cartCount=useSelector((store)=>store.cartData.cartCount)
    const dispatch=useDispatch()
    const addCart=()=>{
dispatch(setCartCount)
    }
  return (
    <div>
        <button onClick={addCart()}>add to cart</button>
        <br />
       <h2>{cartCount}</h2> 
    </div>
  )
}

export default Cart