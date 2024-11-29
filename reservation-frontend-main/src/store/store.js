import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './restaurantSlice';
import userSlice from './userSlice';
import reservationSlice from './reservationSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantSlice,
    user: userSlice,
    reservations: reservationSlice,
  },
});

export default store;
