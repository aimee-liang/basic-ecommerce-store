const Stripe = require('pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8')
const stripe = require('pk_test_51IIKpuG5DSaF9r7j6sxZCK0tppgqaztwXBxuHnJLx2Y8RvgWzpciJeLFT0P1wrd4fZZGH5bMAsp0JdvzTBrpuCqr00m23vKKZ8')('sk_test_51IIKpuG5DSaF9r7jz8YAOzk3E7GrtTXprJceOF1tAf33ISoGWokDTPsfuiTcjktT5dLk7SHs79fpVt5IDcxBwVPn00hclj6ir2');

stripe.customers.create({
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));