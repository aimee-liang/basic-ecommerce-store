import React, {useState} from 'react'

const CardInfo = () => {

    const [payment, setPayment] = useState([])
    const stripe = Stripe("pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8")

    React.useEffect(function effectFunction(){
        async function fetchStripe() {
            const response = await fetch("https://api.stripe.com")
            const json = await response.json()
            setPayment(json.data)
        }
        fetchStripe()
    }, [])

    
    return(
        <>
            <div className="card-info-terminal">
                {/* need API keys */}
            </div>
        </>
    )
}

export default CardInfo