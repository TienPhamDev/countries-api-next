"use client";
import Search from "@/components/search/Search";
import FilterByRegion from "@/components/filterbyregion/FilterByRegion";

import PaginationPage from "@/components/paginationpage/PaginationPage";
import CountryList from "@/components/countrylist/CountryList";
import { PaginationPageProvider } from "@/context/paginationPageContext";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRef, useEffect } from "react";
import { setCountries } from "@/redux/slices/countries.slice";
const MainComponent = ({ data }) => {
  const dispatch = useAppDispatch();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      dispatch(setCountries(data));
      initialized.current = true;
    }
  }, [data, dispatch]);
  const countriesData = useAppSelector(
    (state) => state.countries.countriesRedux
  );
  return (
    <main className="py-10 md:px-12 px-2">
      <section className="flex justify-between flex-col md:flex-row gap-4">
        <Search />
        <FilterByRegion />
      </section>
      <PaginationPageProvider data={countriesData}>
        <CountryList />
        <PaginationPage />
      </PaginationPageProvider>
    </main>
  );
};

export default MainComponent;
