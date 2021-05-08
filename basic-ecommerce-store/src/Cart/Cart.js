import React, {useState, useEffect} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const CartWrapper = styled.div`
    // height: 100%;
    // width: 0;
    // position: fixed;
    // z-index: 1;
    // top: 0;
    // right: 0;
    // overflow-x: hidden;
    // padding-top: 60px;
    // transition: 0.5s;
`

const Cart = (props) => {
    
    const [cart, setCart] = useState([])
    const [filteredCart, setFilteredCart] = useState([])
    // const [removeFromCart, setRemoveFromCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        fetchAndRenderCartItems()
    }, [])

    const clearCart = () => {
        setFilteredCart([])
    }

    const fetchAndRenderCartItems = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setCart(data))
            .catch(error => console.log(error))
        let filtered = cart.filter((item) => {
            return (item.id === props.total)
        })
        setFilteredCart(filtered)
        // setRemoveFromCart(filtered)
    }
    
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
    }

    const renderFilteredCart = () => {
        return filteredCart.map((purchasingItem) => <CartItem purchasingItem={purchasingItem} quantity={quantity} increaseQuantity={increaseQuantity} 
            decreaseQuantity={decreaseQuantity} removeItem={removeItem} />)
    }

    const cartTotal = () => {
        // use reduce
    }

    const removeItem = (data) => {
        let removeFromMyCart = filteredCart.filter((item) => {
            return (item.id !== data)
        })
        setFilteredCart(removeFromMyCart)
        // setRemoveFromCart(removeFromMyCart)
    }

    return (
        <>
        {console.log(filteredCart)}
        <CartWrapper>
            <h2>Your Cart</h2>
                {renderFilteredCart()}
                <h3>Total: ${}</h3>
                <CardInfo/>
                <Button variant="contained" color="secondary" onClick={clearCart}>Clear cart</Button>
        </CartWrapper>
        </>
    )
}

export default Cart