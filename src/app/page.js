"use client";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import StoreProvider from "./StoreProvider";
import { fetchAllCountry } from "./action";
import Search from "@/components/ui/search/Search";
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
        <main className="py-10 px-12">
          <Search />
        </main>
      </StoreProvider>
    </>
  );
}
