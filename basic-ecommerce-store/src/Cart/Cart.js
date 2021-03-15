import React, {useState} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])

    /* calculate total and pass to CartItem
    const calculateTotal = () => {

    }
     */

    const clearCart = () => {
        setCart([cart.length === 0])
    }

    /* const increaseQuantity = () => {
        
    }

    */

    // const decreaseQuantity = () => decrease quantity

    return (
        <>
            <div className="cart">
                {props.cartTotal.length ? <p>Your cart is empty </p> : 
                    <>
                    <h2>Your Cart</h2>
                        <h2>Total: $</h2>
                        <CardInfo/>
                        <button onClick={() => clearCart}>Clear cart</button>
                    </>
                }
            </div>
        </>
    )
}

export default Cart