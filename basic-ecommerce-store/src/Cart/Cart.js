import React, {useState} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])

    /* has parameters here but none in return statement */
    const calculateTotal = ([...items]) => {
        return items["price"].reduce((sum, value) => {return sum + value}, 0)
    }

    const clearCart = () => {
        setCart([cart.length === 0])
    }

    /* const increaseQuantity = () => {
        
    }

    */

    const decreaseQuantity = () => {
        console.log("working on this")
    }

    const renderItems = props.total.map((item, index) => <CartItem key={index} item={item} />)

    return (
        <>
            <div className="cart">
                {props.cartTotal.length ? <p>Your cart is empty </p> : 
                    <>
                    <h2>Your Cart</h2>
                        {renderItems}
                        <h2>Total: ${calculateTotal(cart)}</h2>
                        <CardInfo/>
                        <button onClick={clearCart}>Clear cart</button>
                        <button onClick={decreaseQuantity}>-</button>
                    </>
                }
            </div>
        </>
    )
}

export default Cart