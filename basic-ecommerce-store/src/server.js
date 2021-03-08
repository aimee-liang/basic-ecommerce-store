const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IIKpuG5DSaF9r7jz8YAOzk3E7GrtTXprJceOF1tAf33ISoGWokDTPsfuiTcjktT5dLk7SHs79fpVt5IDcxBwVPn00hclj6ir2');
const uuid= require("uuid/v4");
// const { default: Item } = require('./Items/Item');

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!")
})

app.post('/checkout', async (req, res) => {
    console.log("Request:", req.body)
    let error;
    let status;

    try {
        const {item, token} = req.body
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const idempotency_key = uuid()
        const charge = await stripe.charges.create({
            amount: item.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Thank you for purchasing the ${item.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        },
        {
            idempotency_key
        }
        )
        console.log("Charge:", {charge});
        status = "success"
    } catch (error){
        console.error("Error:", error)
        status = "failure"
    }

    res.json({error, status})
})

app.listen(8080)