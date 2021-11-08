import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    incrementByNumber: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, incrementByNumber, decrement, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
