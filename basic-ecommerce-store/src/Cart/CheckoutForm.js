import React from "react"
import StripeCheckout from 'react-stripe-checkout'


const handleToken = () => {

}

const CheckOutForm = () => {
    return (
        <StripeCheckout stripeKey="pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8" token={}/>
    )
}

export default CheckOutForm