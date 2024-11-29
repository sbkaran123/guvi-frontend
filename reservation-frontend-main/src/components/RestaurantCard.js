import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => (
  <div className="border p-4 rounded">
    <h2 className="text-lg font-bold">{restaurant.name}</h2>
    <p>{restaurant.location}</p>
    <p>{restaurant.cuisine}</p>
    <Link to={`/restaurants/${restaurant._id}`} className="text-blue-500">View Details</Link>
  </div>
);

export default RestaurantCard;
