"use server";
export async function fetchAllCountry() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital",
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
}
