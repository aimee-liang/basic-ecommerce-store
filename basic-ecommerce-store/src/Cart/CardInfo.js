import React from 'react'

const CardInfo = () => {

    // const [payment, setPayment] = useState([])
    const stripe = Stripe("pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8")
    // const elements = stripe.elements()

    return(
        <>
            <div className="card-info-terminal">
                {/* need API keys */}
            </div>
        </>
    )
}

export default CardInfo