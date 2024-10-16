import React from 'react';
const BookingForm = ({ onConfirm }) => {
  return (
    <div className="booking-form">
      <h3>Confirm Booking</h3>
      <button onClick={onConfirm}>Confirm</button>
    </div>
  );
};

export default BookingForm;
