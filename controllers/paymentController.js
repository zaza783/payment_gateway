class PaymentController {
    async initiatePayment(req, res) {
        const { customer_name, customer_email, amount } = req.body;

        try {
            const payment = await PaymentService.processPayment(customer_name, customer_email, amount);
            return res.status(201).json({
                status: 'success',
                message: 'Payment initiated successfully.',
                payment
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    async getPaymentStatus(req, res) {
        const { id } = req.params;

        try {
            const paymentStatus = await PaymentService.fetchPaymentStatus(id);
            return res.status(200).json({
                status: 'success',
                message: 'Payment status retrieved successfully.',
                payment: paymentStatus
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
}

module.exports = PaymentController;