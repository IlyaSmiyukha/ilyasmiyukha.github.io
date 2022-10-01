import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'dark'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // reducers
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

// selectors
export const selectTheme = (state) => state.theme.currentTheme;


export default themeSlice.reducer;
