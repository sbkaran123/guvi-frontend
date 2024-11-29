import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">Profile</h2>
      <div className="mb-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <h3 className="font-bold text-lg">Your Reservations</h3>
      {/* Reservations list can be rendered here */}
    </div>
  );
};

export default UserProfile;
