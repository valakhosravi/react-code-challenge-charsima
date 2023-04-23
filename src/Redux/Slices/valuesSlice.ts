import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ValuesState {
  values: string[];
}

const initialState: ValuesState = {
  values: [],
};

const valuesSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    addValue: (state, action: PayloadAction<string>) => {
      state.values.push(action.payload);
    },
    removeValue: (state, action: PayloadAction<number>) => {
      state.values.splice(action.payload, 1);
    },
    clearValues: (state) => {
      state.values = [];
    },
  },
});

export const { addValue, removeValue, clearValues } = valuesSlice.actions;

export default valuesSlice.reducer;
