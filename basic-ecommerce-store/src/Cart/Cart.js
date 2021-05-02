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
            if (item.id === props.total){
                return item
            }
        })
        setFilteredCart(filtered)
    }

    const renderFilteredCart = () => {
        return filteredCart.map((purchasingItem) => <CartItem purchasingItem={purchasingItem} quantity={quantity} />)
    }

    const increaseQuantity = () => {
        setQuantity(quantity++)
    }

    const decreaseQuantity = () => {

    }

    const cartTotal = () => {
        // use reduce
    }

    const removeItem = () => {
        
    }

    return (
        <CartWrapper>
        {console.log(props.total)}
            <h2>Your Cart</h2>
                {renderFilteredCart()}
                <h3>Total: ${}</h3>
                <CardInfo/>
                <Button variant="contained" color="secondary" onClick={clearCart}>Clear cart</Button>
        </CartWrapper>
    )
}

export default Cart