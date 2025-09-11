"use client";
import store from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";
export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
