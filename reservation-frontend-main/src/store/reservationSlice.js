import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../utils/api';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  const response = await api.get('/reservations');
  return response.data;
});

export const cancelReservation = createAsyncThunk('reservations/cancelReservation', async (reservationId) => {
  const response = await api.delete(`/reservations/${reservationId}`);
  return reservationId;
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(cancelReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload
        );
      });
  },
});

export default reservationSlice.reducer;
