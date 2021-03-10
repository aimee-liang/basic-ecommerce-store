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
        console.log("hello")
    }

    const localDecrease = () => {
        // props.decreaseQuantity()
            /* some kind of confirmation or popup you've decreased quantity? with timeout? */
        console.log("goodbye!")
    }

    return(
        <>
            <div className="cart-item">
                <img alt={props.item.name} src={props.item.image} />
                <h3>{props.item.name}</h3>
                <h4>{props.item.price}</h4>
                <Button onClick={localRemove}>Remove From Cart</Button>
                <Button variant="contained" color="primary" onClick={localIncrease}>+</Button>
                <Button variant="contained" color="secondary" onClick={localDecrease}>-</Button>
                <h3>{props.calculateTotal()}</h3>
            </div>
        </>
    )
}

export default CartItem