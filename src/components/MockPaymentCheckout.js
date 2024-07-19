// MockPaymentCheckout.js
import React from "react";
import styled from "styled-components";

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PaymentButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const MockPaymentCheckout = ({ amount, onPaymentSuccess }) => {
    const handlePayment = () => {
        // Simulate a payment success response
        setTimeout(() => {
            const response = {
                razorpay_order_id: "order_123456",
                razorpay_payment_id: "payment_123456",
            };
            onPaymentSuccess(response);
        }, 1000); // Simulate network delay
    };

    return (
        <PaymentContainer>
            <h3>Amount: ${amount}</h3>
            <PaymentButton onClick={handlePayment}>Pay Now</PaymentButton>
        </PaymentContainer>
    );
};

export default MockPaymentCheckout;
