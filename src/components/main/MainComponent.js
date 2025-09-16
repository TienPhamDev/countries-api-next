"use client";
import Search from "@/components/search/Search";
import FilterByRegion from "@/components/filterbyregion/FilterByRegion";

import PaginationPage from "@/components/paginationpage/PaginationPage";
import CountryList from "@/components/countrylist/CountryList";
import { PaginationPageProvider } from "@/context/paginationPageContext";
const MainComponent = ({ data }) => {
  return (
    <main className="py-10 md:px-12 px-2">
      <section className="flex justify-between flex-col md:flex-row gap-4">
        <Search />
        <FilterByRegion />
      </section>
      <PaginationPageProvider data={data}>
        <CountryList />
        <PaginationPage data={data} />
      </PaginationPageProvider>
    </main>
  );
};

export default MainComponent;
