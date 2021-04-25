import React, {useState, useEffect} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"
import Button from "@material-ui/core/Button"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])
    const [filteredCart, setFilteredCart] = 

    useEffect(() => {

    }, [])

    // const clearCart = () => {
    //     setCart([cart.length === 0])
    // }


    // const renderItems = props.total.map((item, index) => <CartItem key={index} item={item} />)

    return (
        <>
            {props.cartTotal.length ? <p>Your cart is empty </p> : 
                <>
                <h2>Your Cart</h2>
                    {/* {renderItems} */}
                    <h2>Total: $</h2>
                    <CardInfo/>
                    <Button>Clear cart</Button>
                </>
            }
        </>
    )
}

export default Cart