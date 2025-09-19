import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countriesRedux: [],
  filterCountriesData: [],
  errorSearchByName: null,
};

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
    filterDataByName: (state, action) => {
      const filterByName = state.countriesRedux.filter(
        (country) =>
          country.name.common.toLowerCase() === action.payload.toLowerCase()
      );
      if (filterByName.length === 0) {
        state.errorSearchByName = "No country found.";
        state.filterCountriesData.push();
      } else {
        state.filterCountriesData = filterByName;
      }
    },
  },
});
export const { setCountries, setFilterCountriesData, filterDataByName } =
  countriesSlice.actions;
export default countriesSlice.reducer;
