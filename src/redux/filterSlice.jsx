import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

// const persistConfig = {
//   key: 'filter',
//   storage,
// };

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
