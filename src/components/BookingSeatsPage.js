// BookingSeatsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentOptionsPage from './PaymentOptionsPage';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SeatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 30px);
  gap: 10px;
  margin: 20px 0;
`;

const Seat = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selected ? 'green' : 'gray')};
  cursor: pointer;
`;

const BookingDetailsContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const BookingSeatsPage = ({ movie }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookingDetails, setBookingDetails] = useState(null);

    const handleSeatClick = (index) => {
        setSelectedSeats((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handlePaymentSuccess = (response, details) => {
        setBookingDetails({
            ...details,
            transactionId: response.transactionId,
        });
    };

    const bookingDetailsData = {
        movieTitle: movie.Title,
        seats: selectedSeats.map((index) => `Seat ${index + 1}`),
        amount: selectedSeats.length * 100, // Example amount calculation
    };

    return (
        <PageContainer>
            <h2>Book Seats for {movie.Title}</h2>
            <SeatsContainer>
                {Array.from({ length: 50 }).map((_, index) => (
                    <Seat
                        key={index}
                        selected={selectedSeats.includes(index)}
                        onClick={() => handleSeatClick(index)}
                    />
                ))}
            </SeatsContainer>
            <PaymentOptionsPage
                amount={selectedSeats.length * 100}
                onPaymentSuccess={handlePaymentSuccess}
                bookingDetails={bookingDetailsData}
            />
            {bookingDetails && (
                <BookingDetailsContainer>
                    <h3>Booking Confirmation</h3>
                    <p><strong>Movie:</strong> {bookingDetails.movieTitle}</p>
                    <p><strong>Seats:</strong> {bookingDetails.seats.join(', ')}</p>
                    <p><strong>Amount Paid:</strong> ${bookingDetails.amount}</p>
                    <p><strong>Transaction ID:</strong> {bookingDetails.transactionId}</p>
                </BookingDetailsContainer>
            )}
        </PageContainer>
    );
};

export default BookingSeatsPage;
