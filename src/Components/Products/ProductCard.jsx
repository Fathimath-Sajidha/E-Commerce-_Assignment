import React from 'react'
import './card.css'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/store';
import { setCartCount, setCartItems } from '../Redux/CartSlice'

function ProductCard({ product }) {
  const { cartCount } = useSelector((store) => store.cartData)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const addCart = (event) => {
    event.stopPropagation();  // Prevent the card click event
    dispatch(setCartCount(1));  // Increment cart count by 1
    console.log(cartCount)
    dispatch(setCartItems(product));  // Add the current product to the cart
  };

  const handleClick = () => {
    navigate(`/ProductDetails/${product.id}`);
  };

  return (
    <Card className='card' style={{ width: '18rem', height: '22rem' }} onClick={handleClick}>
      <Card.Img className='CardImage' variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <p> Price: {product.price}</p>
        </Card.Text>
        <button onClick={addCart}>Add To Cart</button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;