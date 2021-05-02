import React from "react"
import Button from "@material-ui/core/Button"
import styled from 'styled-components'

const CartItemWrapper = styled.div`
    height: 5vh;
`

const CartItem = (props) => {

    const localRemove = () => {
        // props.removeItem
        return <p>"You've removed this item from your cart</p>
    }

    const localIncrease = () => {
        props.increaseQuantity()
    }

    const localDecrease = () => {
        props.decreaseQuantity()
    }

    return(
        <CartItemWrapper>
            <h6>{props.purchasingItem.title}</h6>
            <img alt="" src={props.purchasingItem.image}/>
            <p>{props.purchasingItem.price}</p>
            <p>Quantity: {props.quantity}</p>
            <button onClick={localIncrease}>+</button>
            <button onClick={localDecrease}>-</button>
            <Button variant="contained" color="secondary" onClick={localRemove}>Remove Item from Cart</Button>
        </CartItemWrapper>
    )
}

export default CartItem