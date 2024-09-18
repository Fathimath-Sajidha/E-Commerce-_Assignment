import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../App';
import './Singleproduct.css'
import {store} from '../../Components/Redux/store'
import { setCartCount,setCartItems } from '../../Components/Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

function SingleProduct({product}) {
  const {cartCount}=useSelector((store)=>store.cartData)
  const dispatch=useDispatch()
  const { productId } = useParams();  // Fetch productId from URL params
  const { products, selectedProduct, setSelectedProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const addCart = () => {
    dispatch(setCartCount(1));  // Increment cart count by 1
    dispatch(setCartItems(product));  // Add the current product to the cart
    console.log(cartCount)
  };


  useEffect(() => {
    const product = products.find(product => product.id === Number(productId));  // Convert productId to number
    if (product) {
      setSelectedProduct(product);
    } else {
      navigate('/');  
    }
  }, [products, productId, setSelectedProduct, navigate]);

  if (!selectedProduct) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='product container'>
      <img className='p-image img-fluid mx-auto d-block' src={selectedProduct.image} alt={selectedProduct.title} />
      <h1>{selectedProduct.title}</h1>
      <h3>{selectedProduct.category}</h3>
      <p>{selectedProduct.description}</p>
      <h2>Price:{selectedProduct.price}</h2>
      <button onClick={addCart}>Add To Cart</button>
    </div>
  );
}

export default SingleProduct;