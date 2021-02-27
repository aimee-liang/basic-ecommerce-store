import React from 'react'
import CheckoutForm from "./CheckoutForm"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

const CardInfo = () => {

    const stripePromise = loadStripe("pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8")

    return(
        <div className="card-info-terminal">
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    )
}

export default CardInfo