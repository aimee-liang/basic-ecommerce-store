import React from "react"
import StripeCheckout from 'react-stripe-checkout'
import Item from "../Items/Item"
import axios from "axios"
import { toast } from "react-toastify"


const handleToken = (token, addresses) => {
    const response = await axios.post(
        "http://localhost:8080", /* other link here? */
        {token, item}
    )
    const {status} = response.data
    console.log("Response:", response.data)
    if (status === "Success"){
        toast("Please check your email for receipt and shipping info!", {type: "success"} )
    } else {
        toast("Your purchase was not complete. Please check your card information and try again", {type: "error"})
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