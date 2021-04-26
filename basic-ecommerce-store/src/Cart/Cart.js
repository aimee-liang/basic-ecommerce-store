import React, {useState, useEffect} from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const Cart = (props) => {
    
    const [cart, setCart] = useState([])
    const [filteredCart, setFilteredCart] = useState([])

    useEffect(() => {
        fetchAndRenderCartItems()
    }, [])

    // const clearCart = () => {
    //     setCart([cart.length === 0])
    // }

    const fetchAndRenderCartItems = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setCart(data))
            .catch(error => console.log(error))
        let filtered = cart.filter((item) => {
            return item.id === total
        })
    }

    return (
        <>
            <h2>Your Cart</h2>
                <h3>Total: $</h2>
                <CardInfo/>
                <Button>Clear cart</Button>
        </>
    )
}

export default Cart