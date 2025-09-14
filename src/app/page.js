import StoreProvider from "./StoreProvider";
import Search from "@/components/search/Search";
import FilterByRegion from "@/components/filterbyregion/FilterByRegion";
import CountryCard from "@/components/countryItem/CountryItem";
import PaginationPage from "@/components/paginationpage/PaginationPage";
export async function fetchAllCountry() {
  const res = await fetch(
    "https://restcountres.com/v3.1/all?fields=name,flags,capital,population,region",
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
        <main className="py-10 px-12">
          <section className="flex justify-between">
            <Search />
            <FilterByRegion />
          </section>
          <section className="grid grid-cols-4 gap-18 pt-10">
            {errorMsg && <div>{errorMsg}</div>}
            {/* {data.map((country, index) => {
              if (index < 8) {
                return (
                  <CountryCard key={country.name + index} data={country} />
                );
              }
            })} */}
            <PaginationPage data={data} />
          </section>
        </main>
      </StoreProvider>
    </>
  );
}
