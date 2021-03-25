import React, {useState} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])
    const [key, setKey] = useState()

    // const calculateTotal = ([...items]) => {
    //     return items["price"].reduce((sum, value) => {return sum + value}, 0)
    // }

    const clearCart = () => {
        setCart([cart.length === 0])
    }

    /* take in items and key of item that has been clicked on */
    // const increaseQuantity = (items, key) => {
    //     setKey(key)
    //     items.filter((item) => {
    //         if (item.key === key){
    //             return parseInt(item["price"] * 2) && parseInt(item["quantity"] + 1)
    //         } 
    //     })
    // }

    // const decreaseQuantity = (items, key) => {
    //     setKey(key)
    //     items.filter((item) => {
    //         if (item.key === key){
    //             let amt = item["price"]
    //             return parseInt(item["price"] -= amt) && parseInt(item["quantity"] - 1)
    //         }
    //     })
    // }

    // const renderItems = props.total.map((item, index) => <CartItem key={index} item={item} />)

    return (
        <>
            <div className="cart">
                {props.cartTotal.length ? <p>Your cart is empty </p> : 
                    <>
                    <h2>Your Cart</h2>
                        {/* {renderItems} */}
                        <h2>Total: $</h2>
                        {/* <h2>Total: ${calculateTotal(cart)} </h2> */}
                        <CardInfo/>
                        <button onClick={clearCart}>Clear cart</button>
                        {/* <button onClick={increaseQuantity(cart)}>+</button> */}
                        {/* <button onClick={decreaseQuantity(cart)}>-</button> */}
                    </>
                }
            </div>
        </>
    )
}

export default Cart