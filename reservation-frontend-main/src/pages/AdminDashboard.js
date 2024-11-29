import React, { useState, useEffect } from 'react';
import { fetchRestaurants, deleteRestaurant } from '../store/restaurantSlice';

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants().then((data) => setRestaurants(data));
  }, []);

  const handleDeleteRestaurant = (restaurantId) => {
    deleteRestaurant(restaurantId);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">Admin Dashboard</h2>
      <div>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="mb-4 border-b pb-2">
            <p>{restaurant.name}</p>
            <button
              onClick={() => handleDeleteRestaurant(restaurant.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Restaurant
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
