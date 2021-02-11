import React from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {

    // const calculateTotal = () => calculate total and pass to CartItem

    // const increaseQuantity = () => increase quantity

    // const decreaseQuantity = () => decrease quantity

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {props.cartTotal.length ? <p>Your cart is empty</p> : null}
            {props.cartTotal.map((item, index) => {
                return <CartItem key = {index} item = {item} />
            })}
            {/* calculate total */}
            <h2>Total: $</h2>
            <CardInfo/>
        </div>
    )
}

export default Cart