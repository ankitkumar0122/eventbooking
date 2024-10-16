import React, { useEffect, useState, useMemo } from 'react';
import EventCard from './EventCard';
import SearchBox from './SearchBox';
import './styles/EventDetails.css';
import eventsData from '../data/events.json';

const EventList = () => {
  const [events, setEvents] = useState(eventsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;  

  const filteredEvents = useMemo(() => {
    return events.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [events, searchTerm]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="event-list">
      <h2>Available Events</h2>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="events">
        {currentEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default EventList;
