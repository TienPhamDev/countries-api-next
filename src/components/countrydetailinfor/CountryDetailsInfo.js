const CountryDetailsInfo = ({ data, ...props }) => {
  const border = data.borders;
  const cca3 = data.cca3;

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
          Border Countries :{" "}
          {border === undefined ? "No border with any country." : border}
        </span>
      </div>
    </div>
  );
};

export default CountryDetailsInfo;
