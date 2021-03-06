import React, {useState} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])

    /* calculate total and pass to CartItem
    const calculateTotal = () => {

    }
     */

    /* clears cart 
    const clearCart = () => {
        setCart(cart.length === 0)
    }

    */

    // const increaseQuantity = () => increase quantity

    // const decreaseQuantity = () => decrease quantity

    return (
        <>
        {/* {props.setCartDisplay ? 

                <div className="cart">
                <h2>Your Cart</h2>
                {props.cartTotal.length ? <p>Your cart is empty</p> : null}
                <h2>Total: $</h2>
                <CardInfo/>
                </div>

                :
                null
        } */}
        </>
    )
}

export default Cart