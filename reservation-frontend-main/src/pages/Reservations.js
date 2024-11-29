import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, cancelReservation } from '../store/reservationSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleCancel = (reservationId) => {
    dispatch(cancelReservation(reservationId));
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">Your Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id} className="border-b py-2">
              <div>
                <strong>{reservation.restaurantName}</strong>
                <p>{reservation.date}</p>
                <p>{reservation.time}</p>
                <p>Party Size: {reservation.partySize}</p>
              </div>
              <button
                onClick={() => handleCancel(reservation.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel Reservation
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reservations;
