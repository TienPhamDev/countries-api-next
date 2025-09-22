import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countriesRedux: [],
  filterCountriesData: [],
  filterRegion: "all",
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
        state.filterCountriesData = state.countriesRedux.map(
          (country) => country
        );
      } else {
        state.filterCountriesData = filterByName;
      }
    },
    filterRegion: (state, action) => {
      state.filterRegion = action.payload;
      const region = state.filterRegion;
      if (region === "all") {
        state.filterCountriesData = state.countriesRedux.map(
          (country) => country
        );
      } else {
        const filterByRegion = state.countriesRedux.filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
        );
        state.filterCountriesData = filterByRegion.map((country) => country);
      }
    },
  },
});
export const {
  setCountries,
  setFilterCountriesData,
  filterDataByName,
  filterRegion,
} = countriesSlice.actions;
export default countriesSlice.reducer;
