# Payment Gateway API

## Overview
This project is a RESTful API designed for small businesses to accept payments from customers using various payment gateways such as PayPal, Paystack, or Flutterwave. The API focuses on minimal customer information, including name, email, and payment amount.

## Features
- Initiate payments with customer details.
- Retrieve payment status using a unique payment ID.
- Integration with popular payment gateways.
- Versioned API for better management and updates.

## Project Structure
```
payment-gateway-api
├── src
│   ├── controllers          # Contains the logic for handling payment requests
│   ├── routes               # Defines the API routes
│   ├── services             # Contains the business logic for payment processing
│   ├── app.js               # Entry point of the application
│   └── config               # Configuration settings for payment gateway integration
├── tests                    # Unit tests for controllers and services
├── .github                  # CI/CD pipeline configuration
├── package.json             # NPM configuration file
└── .gitignore               # Files to be ignored by Git
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/zaza783/payment-gateway-api.git
   ```
2. Navigate to the project directory:
   ```
   cd payment-gateway-api
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the server, run:
```
npm start
```
The API will be available at `http://localhost:3000/api/v1`.

### Endpoints
- **POST /api/v1/payments**: Initiate a payment.
  - Request Body:
    ```json
    {
      "customer_name": "John Doe",
      "customer_email": "john@example.com",
      "amount": 50.00
    }
    ```
- **GET /api/v1/payments/{id}**: Retrieve the status of a specific payment transaction.

## Testing
To run the tests, use:
```
npm test
```

## CI/CD
This project includes a CI/CD pipeline configured with GitHub Actions. It automates the testing and deployment process.

## License
This project is licensed under the MIT License
