import React from 'react';
import './styles/SearchBox.css'

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
