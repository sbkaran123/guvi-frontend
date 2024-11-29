import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await axios.get('/api/restaurants');
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Restaurants</h1>
      <div className="grid grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
