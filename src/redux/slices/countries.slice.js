import { createSlice } from "@reduxjs/toolkit";

const initialState = { countriesRedux: [] };

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countriesRedux = action.payload;
    },
  },
});
export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
