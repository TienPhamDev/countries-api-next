import MainComponent from "@/components/main/MainComponent";
import StoreProvider from "./StoreProvider";

export async function fetchAllCountry() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,cca3",
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
  console.log(data);
  return (
    <>
      <MainComponent data={data} />
    </>
  );
}
