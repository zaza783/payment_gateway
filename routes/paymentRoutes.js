const express = require('express');
const PaymentController = require('../controllers/paymentController');

const router = express.Router();
const paymentController = new PaymentController();

function setPaymentRoutes(app) {
    router.post('/payments', paymentController.initiatePayment.bind(paymentController));
    router.get('/payments/:id', paymentController.getPaymentStatus.bind(paymentController));
    
    app.use('/api/v1payments', router);
}

module.exports = setPaymentRoutes;