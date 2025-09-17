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
      <h1 className="font-bold text-2xl">{data.name.official}</h1>

      <div className="grid grid-cols-2">
        <div>
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
        <div>
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
      <div>
        <span>
          <strong>Border Countries:</strong>{" "}
          {borders === undefined || borders.length === 0 ? (
            "No border with any country."
          ) : (
            <>
              {nameBorderCountries.map((country, idx) => {
                return <span key={idx}>{country}</span>;
              })}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default CountryDetailsInfo;
