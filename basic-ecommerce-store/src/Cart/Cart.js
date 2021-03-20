import React, {useState} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])

    const calculateTotal = ([...items]) => {
        return items["price"].reduce((sum, value) => {return sum + value}, 0)
    }

    const clearCart = () => {
        setCart([cart.length === 0])
    }

    /* const increaseQuantity = () => {
        
    }

    */

    /* decrease quantity */
    // const decreaseQuantity = () => {

    // }

    return (
        <>
            <div className="cart">
                {props.cartTotal.length ? <p>Your cart is empty </p> : 
                    <>
                    <h2>Your Cart</h2>
                        {/* need to display each item in cart, so forEach? Map? */}<CartItem />
                        <h2>Total: ${calculateTotal()}</h2>
                        <CardInfo/>
                        <button onClick={clearCart}>Clear cart</button>
                    </>
                }
            </div>
        </>
    )
}

export default Cart