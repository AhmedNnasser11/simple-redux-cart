import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartItem from '../components/cartItem/CartItem'

const Cart = () => {
    const cart = useSelector((state) => state.allProducts.cart)
  return (
    <Container>
    {cart.map((item) => (
        <CartItem item={item} key={item.id} />
    ))}
    </Container>
  )
}

export default Cart