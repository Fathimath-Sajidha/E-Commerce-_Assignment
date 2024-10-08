import React from 'react'
import { Card } from 'react-bootstrap'

function WomensClothsCard({product}) {
  return (
    <Card className='card'  style={{ width: '18rem', height:'22rem'}}>
      <Card.Img  className='CardImage' variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        <p> Price:{product.price}</p>
        </Card.Text>
        <button>Add To Cart</button>
      </Card.Body>
    </Card>
  )
}

export default WomensClothsCard