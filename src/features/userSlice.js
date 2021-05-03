import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    // Push into the store
    // Actions where dispatching to the global store
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    }
  },
});

export const { login, logout } = userSlice.actions;

// Get values from the store with Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
