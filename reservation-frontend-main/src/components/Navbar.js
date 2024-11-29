import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4 flex justify-between">
    <Link to="/" className="font-bold">Restaurant Reservation</Link>
    <div>
      <Link to="/reservations" className="px-4">Reservations</Link>
      <Link to="/profile" className="px-4">Profile</Link>
    </div>
  </nav>
);

export default Navbar;
