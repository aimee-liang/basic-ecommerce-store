const stripe = require('stripe')('sk_test_51IIKpuG5DSaF9r7jz8YAOzk3E7GrtTXprJceOF1tAf33ISoGWokDTPsfuiTcjktT5dLk7SHs79fpVt5IDcxBwVPn00hclj6ir2');

stripe.customers.create({
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));