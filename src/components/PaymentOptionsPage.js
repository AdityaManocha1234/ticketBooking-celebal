// PaymentOptionsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PaymentButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
`;

const PayNowButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  width: 200px;
`;

const SelectField = styled.select`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  width: 220px;
`;

const PaymentOptionsPage = ({ amount, onPaymentSuccess, bookingDetails }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handlePayment = () => {
        if (selectedMethod) {
            // Mock payment process
            const mockResponse = { transactionId: `${selectedMethod}-123456789` };
            onPaymentSuccess(mockResponse, bookingDetails);
        } else {
            alert('Please select a payment method and enter required details.');
        }
    };

    const renderInputField = () => {
        switch (selectedMethod) {
            case 'CreditCard':
            case 'DebitCard':
                return (
                    <InputField
                        type="text"
                        placeholder="Enter Card Number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                );
            case 'Wallet':
            case 'UPI':
                return (
                    <InputField
                        type="text"
                        placeholder="Enter Phone Number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                );
            case 'NetBanking':
                return (
                    <SelectField
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    >
                        <option value="" disabled>Select Bank</option>
                        <option value="BankA">Bank of Baroda</option>
                        <option value="BankB">PNB</option>
                        <option value="BankC">SBI</option>
                        <option value="BankC">HDFC</option>
                        <option value="BankC">Oriental Bank</option>
                    </SelectField>
                );
            default:
                return null;
        }
    };

    return (
        <PaymentOptionsContainer>
            <h3>Total Amount: ${amount}</h3>
            <p>Select Payment Method:</p>
            <PaymentButton onClick={() => setSelectedMethod('CreditCard')}>Credit Card</PaymentButton>
            <PaymentButton onClick={() => setSelectedMethod('DebitCard')}>Debit Card</PaymentButton>
            <PaymentButton onClick={() => setSelectedMethod('NetBanking')}>Net Banking</PaymentButton>
            <PaymentButton onClick={() => setSelectedMethod('UPI')}>UPI</PaymentButton>
            <PaymentButton onClick={() => setSelectedMethod('Wallet')}>Wallet</PaymentButton>
            {selectedMethod && renderInputField()}
            <PayNowButton onClick={handlePayment}>Pay Now</PayNowButton>
        </PaymentOptionsContainer>
    );
};

export default PaymentOptionsPage;
