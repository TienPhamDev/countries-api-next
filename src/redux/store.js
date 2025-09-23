import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "@/redux/slices/counterSlice";
import countriesSliceReducer from "./slices/countries.slice";
const store = () => {
  return configureStore({ reducer: { countries: countriesSliceReducer } });
};
export default store;
