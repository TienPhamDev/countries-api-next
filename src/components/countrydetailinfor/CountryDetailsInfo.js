"use client";
import { useAppSelector } from "@/redux/hooks";

const CountryDetailsInfo = ({ data, ...props }) => {
  const { countriesRedux } = useAppSelector((state) => state.countries);
  console.log(
    "Redux countries:",
    countriesRedux.map((c) => c.cca3)
  );
  const borders = data.borders;
  let nameBorderCountries = [];
  console.log(borders);
  if (Array.isArray(borders) && borders.length > 0) {
    borders.forEach((countryCCA3) => {
      console.log("Border code:", countryCCA3);
      const country = countriesRedux.find(
        (element) => element.cca3.toLowerCase() === countryCCA3.toLowerCase()
      );
      console.log(country);
      if (country) {
        nameBorderCountries.push(country.name.common);
      }
    });
  }
  // console.log(nameBorderCountries);
  //get Native Name of the country in data
  const nativeNameObj = data.name.nativeName;
  const nativeNameEntries = Object.entries(nativeNameObj);
  const [lastNativeNameKey, lastNativeNameValue] =
    nativeNameEntries[nativeNameEntries.length - 1];
  const nativeName = data.name.nativeName[lastNativeNameKey].common;

  return (
    <div {...props}>
      <h1 className="font-bold text-2xl md:pb-10 pb-6">{data.name.official}</h1>

      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="flex flex-col gap-2">
          <p>
            <strong>Native name:</strong> {nativeName}
          </p>
          <p>
            <strong>Population:</strong> {data.population}
          </p>
          <p>
            <strong>Region:</strong> {data.region}
          </p>
          <p>
            <strong>Sub Region:</strong> {data.subregion}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <strong>Top Level Domain:</strong> {data.subregion}
          </p>
          <p>
            <strong>Curencies:</strong> {data.subregion}
          </p>
          <p>
            <strong>Languages:</strong> {data.subregion}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center md:pt-10 pt-6 w-full ">
        <span className="">
          <strong>Border Countries:</strong>{" "}
        </span>
        <span className="flex gap-2  flex-wrap">
          {borders === undefined || borders.length === 0 ? (
            "No border with any country."
          ) : (
            <>
              {nameBorderCountries.map((country, idx) => {
                return (
                  <span
                    key={idx}
                    className="dark:bg-blue-900 bg-white py-2 px-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]"
                  >
                    {country}
                  </span>
                );
              })}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default CountryDetailsInfo;
