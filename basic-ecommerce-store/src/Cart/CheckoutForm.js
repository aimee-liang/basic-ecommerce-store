import React from "react"
import StripeCheckout from 'react-stripe-checkout'
import Item from "../Items/Item"
import axios from "axios"


const handleToken = (token, addresses) => {
    const url="http://localhost:8080"    
    const getStripe = () => {
        axios.get()
    }
}

const CheckOutForm = () => {
    return (
        <StripeCheckout stripeKey="pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8" token={handleToken}
            billingAddress shippingAddress amount={Item.price * 100} name={Item.name}
        />
    )
}

export default CheckOutForm