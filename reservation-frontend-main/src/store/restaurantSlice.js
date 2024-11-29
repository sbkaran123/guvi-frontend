import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurants = createAsyncThunk('restaurants/fetchAll', async () => {
  const { data } = await axios.get('/api/restaurants');
  return data;
});

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: { list: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    });
  },
});

export default restaurantSlice.reducer;
