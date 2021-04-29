import React from "react"
import Button from "@material-ui/core/Button"

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
        </>
    )
}

export default CartItem