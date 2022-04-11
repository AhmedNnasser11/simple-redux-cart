import React from 'react'
import "./Product.scss"
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/productActions'

const Product = (props) => {
    const { title, image, description, id } = props.item

    const dispatch = useDispatch()

  return (
    <Card style={{ width: '18rem' }} className="product">
    <Card.Img style={{ width: '100%', height:"200px", objectFit: 'cover' }} src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {description.substring(0, 50)} ...
      </Card.Text>
      <Button variant="primary" size="md" onClick={() => dispatch(addToCart({title, image, id, description}))}>
      ADD TO CART
    </Button>
    </Card.Body>
  </Card>
  )
}

export default Product