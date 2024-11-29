import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import SearchFilters from './components/SearchFilters';
import Reservations from './components/Reservations';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import ReviewForm from './components/ReviewForm';
import { fetchUser } from './store/userSlice';
import { fetchReservations } from './store/reservationSlice';

const AppContent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { reservations } = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleFilterChange = (filters) => {
    console.log('Applied Filters:', filters);
    // Apply filters to the restaurant listings (you can implement this logic)
  };

  const handleSubmitReview = (restaurantId, review) => {
    console.log('Review for restaurant:', restaurantId, review);
    // Handle the review submission logic
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center font-bold text-3xl mb-6">Restaurant Reservation Platform</h1>
      
      {/* Search Filters */}
      <SearchFilters onFilterChange={handleFilterChange} />
      
      {/* Reservations Section */}
      <Reservations />
      
      {/* User Profile */}
      {user && <UserProfile user={user} />}
      
      {/* Review Form */}
      <ReviewForm restaurantId={1} onSubmitReview={handleSubmitReview} />
      
      {/* Admin Dashboard */}
      <AdminDashboard />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
