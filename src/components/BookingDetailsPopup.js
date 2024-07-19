// BookingDetailsPopup.js
import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Details = styled.p`
  margin: 5px 0;
`;

const CloseButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const BookingDetailsPopup = ({ isOpen, onClose, bookingDetails }) => {
  if (!bookingDetails) return null;

  return (
    <PopupOverlay isOpen={isOpen}>
      <PopupContent>
        <Title>Booking Confirmation</Title>
        <Details><strong>Movie:</strong> {bookingDetails.movieTitle}</Details>
        <Details><strong>Seats:</strong> {bookingDetails.seats.join(', ')}</Details>
        <Details><strong>Amount Paid:</strong> ${bookingDetails.amount}</Details>
        <Details><strong>Transaction ID:</strong> {bookingDetails.transactionId}</Details>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </PopupContent>
    </PopupOverlay>
  );
};

export default BookingDetailsPopup;
