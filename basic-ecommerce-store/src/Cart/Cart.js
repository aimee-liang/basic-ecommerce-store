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

    const increaseQuantity = ([...items]) => {
        return items.filter((key) => {
            if (item.key === )
        })
        // filter through items to match the one clicked
        // increase quantity
    }

    const decreaseQuantity = ([...items]) => {
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