import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../data/events.json';
import './styles/EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(id));
  const [availableSeats, setAvailableSeats] = useState(event.availableSeats);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 
  const handleBooking = () => {
    if (availableSeats > 0) {
      setAvailableSeats(availableSeats - 1);  
      setMessage('Ticket booked successfully!');
      setMessageType('success');  
      alert('Ticket booked successfully!');
    } else {
      setMessage('This event is fully booked.');
      setMessageType('error'); 
    }
  };

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Available Seats: {availableSeats}</p>
      <p>Price: ${event.price}</p>
      <button onClick={handleBooking}>Book Ticket</button>
      {message && (
        <p className={messageType === 'success' ? 'success-message' : 'error-message'}>
          {message}
        </p>
      )}
    </div>
  );
};

export default EventDetails;
