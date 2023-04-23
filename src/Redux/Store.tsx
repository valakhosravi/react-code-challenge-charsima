import { configureStore } from '@reduxjs/toolkit';
import valuesReducer from './Slices/valuesSlice';

const store = configureStore({
  reducer: {
    values: valuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
