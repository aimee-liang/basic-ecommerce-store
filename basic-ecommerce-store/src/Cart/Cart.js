import React, {useState, useEffect} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const CartWrapper = styled.div`

`

const Cart = (props) => {
    
    const [cart, setCart] = useState([])
    const [filteredCart, setFilteredCart] = useState([])

    useEffect(() => {
        fetchAndRenderCartItems() /* renderFilteredCart ? */
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
            return item.id === props.total
        })
        setFilteredCart(filtered)
    }

    const renderFilteredCart = () => {
        return filteredCart.map((purchasingItem) => <CartItem purchasingItem={purchasingItem} /> )
    }

    const increaseQuantity = () => {

    }

    const decreaseQuantity = () => {

    }

    const cartTotal = () => {
        // use reduce
    }

    return (
        <>
            <h2>Your Cart</h2>

                <h3>Total: ${}</h3>
                <CardInfo/>
                <Button variant="contained" color="secondary" onClick={clearCart}>Clear cart</Button>
        </>
    )
}

export default Cart