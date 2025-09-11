import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "@/redux/slices/counterSlice";
const store = () => {
  return configureStore({ reducer: { counter: counterSliceReducer } });
};
export default store;
