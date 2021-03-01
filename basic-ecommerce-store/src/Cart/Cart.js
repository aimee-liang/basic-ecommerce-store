import React from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {

    /* use State here to show the cart */
    // const [display, setDisplay] = useState(false)

    /* calculate total and pass to CartItem
    const calculateTotal = () => {

    }
     */

    /* clears cart 
    const clearCart = () => {

    }

    */

    // const increaseQuantity = () => increase quantity

    // const decreaseQuantity = () => decrease quantity

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {props.cartTotal.length ? <p>Your cart is empty</p> : null}
            {/* {props.cartTotal.map((item, index) => {
                return <CartItem key = {index} item = {item} />
            })} */}
            {/* calculate total */}
            <h2>Total: $</h2>
            <CardInfo/>
        </div>
    )
}

export default Cart