import StoreProvider from "./StoreProvider";
import Search from "@/components/search/Search";
import FilterByRegion from "@/components/filterbyregion/FilterByRegion";

import PaginationPage from "@/components/paginationpage/PaginationPage";
import CountryList from "@/components/countrylist/CountryList";
import { PaginationPageProvider } from "@/context/paginationPageContext";
export async function fetchAllCountry() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region",
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(errorBody);
  }
  const data = await res.json();
  return data;
}

export default async function Home() {
  let data = [];
  let errorMsg = "";
  try {
    data = await fetchAllCountry();
  } catch (error) {
    errorMsg = error.message;
  }

  return (
    <>
      <StoreProvider>
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
      </StoreProvider>
    </>
  );
}
