class PaymentService {
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway; // Initialize with the payment gateway instance
    }

    async processPayment(customerName, customerEmail, amount) {
        try {
            // Logic to interact with the payment gateway API to initiate a payment
            const paymentResponse = await this.paymentGateway.createPayment({
                name: customerName,
                email: customerEmail,
                amount: amount
            });
            return paymentResponse; // Return the response from the payment gateway
        } catch (error) {
            throw new Error('Payment processing failed: ' + error.message);
        }
    }

    async fetchPaymentStatus(paymentId) {
        try {
            // Logic to retrieve the payment status from the payment gateway API
            const statusResponse = await this.paymentGateway.getPaymentStatus(paymentId);
            return statusResponse; // Return the status response from the payment gateway
        } catch (error) {
            throw new Error('Failed to retrieve payment status: ' + error.message);
        }
    }
}

export default PaymentService;