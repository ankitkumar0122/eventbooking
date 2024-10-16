import React from 'react';
import { Link } from 'react-router-dom';
import './styles/EventCard.css'
const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Available Seats: {event.availableSeats}</p>
      <p>Price: ${event.price}</p>
      <Link to={`/event/${event.id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
