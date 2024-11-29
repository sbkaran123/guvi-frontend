import React, { useState } from 'react';

const SearchFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="font-bold text-lg mb-4">Search Filters</h3>
      <div className="mb-2">
        <label className="block text-sm font-semibold">Cuisine</label>
        <select
          name="cuisine"
          value={filters.cuisine}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold">Price Range</label>
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">All</option>
          <option value="1">Under $20</option>
          <option value="2">$20 - $50</option>
          <option value="3">Above $50</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-semibold">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter location"
        />
      </div>
    </div>
  );
};

export default SearchFilters;
