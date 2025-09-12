"use client";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import StoreProvider from "./StoreProvider";
import { fetchAllCountry } from "./action";
export default function Home() {
  const [countries, setCountries] = useState(null);
  const fetchDataCountry = async () => {
    const result = await fetchAllCountry();
    console.log(result);
    setCountries(result);
  };
  useEffect(() => {
    fetchDataCountry();
  }, []);
  return (
    <>
      <StoreProvider>
        <main>
          <h1>Nunito</h1>
        </main>
      </StoreProvider>
    </>
  );
}
