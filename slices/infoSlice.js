import { createSlice } from '@reduxjs/toolkit';

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    currentSavings: 0,
    monthlyInvestments: 0,
    amountYears: 0,
  },
  reducers: {
    setCurrentSavings: (state, action) => {
      state.currentSavings = action.payload;
    },
    setMonthlyInvestments: (state, action) => {
      state.monthlyInvestments = action.payload;
    },
    setAmountYears: (state, action) => {
      state.amountYears = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSavings, setMonthlyInvestments, setAmountYears } =
  infoSlice.actions;

export const selectCurrentSavings = (state) => state.infoReducer.currentSavings;
export const selectMonthlyInvestments = (state) =>
  state.infoReducer.monthlyInvestments;
export const selectAmountYears = (state) => state.infoReducer.amountYears;

export default infoSlice.reducer;
