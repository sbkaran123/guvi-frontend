import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const { data } = await axios.get(`/api/restaurants/${id}`);
      setRestaurant(data);
    };
    fetchRestaurant();
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <p>{restaurant.location}</p>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.priceRange}</p>
    </div>
  );
};

export default RestaurantDetails;
