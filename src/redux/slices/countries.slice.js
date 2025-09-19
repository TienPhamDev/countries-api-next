import { createSlice } from "@reduxjs/toolkit";

const initialState = { countriesRedux: [], filterCountriesData: [] };

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countriesRedux = action.payload;
    },
    setFilterCountriesData: (state, action) => {
      state.filterCountriesData = action.payload;
    },
  },
});
export const { setCountries, setFilterCountriesData } = countriesSlice.actions;
export default countriesSlice.reducer;
