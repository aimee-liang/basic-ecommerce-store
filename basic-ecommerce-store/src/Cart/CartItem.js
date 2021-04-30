import React from "react"
import Button from "@material-ui/core/Button"
import styled from 'styled-components'

const CartItem = (props) => {

    const localRemove = () => {
        // props.removeItem
        return <p>"You've removed this item from your cart</p>
    }

    const localIncrease = () => {
        // props.increaseQuantity()
            /* some kind of confirmation or popup you've increased quantity? with timeout? */
    }

    const localDecrease = () => {
        // props.decreaseQuantity()
            /* some kind of confirmation or popup you've decreased quantity? with timeout? */
    }

    return(
        <>
            <h6>{props.purchasingItem.title}</h6>
            <img alt="" src={props.purchasingItem.image}/>
            <p>{props.purchasingItem.price}</p>
            <button>+</button>
            <button>-</button>
        </>
    )
}

export default CartItem