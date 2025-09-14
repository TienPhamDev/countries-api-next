const CountryList = () => {
  return (
    <section className="grid grid-cols-4 gap-18 pt-10">
      {errorMsg && <div>{errorMsg}</div>}
      {/* {data.map((country, index) => {
                if (index < 8) {
                  return (
                    <CountryCard key={country.name + index} data={country} />
                  );
                }
              })} */}
    </section>
  );
};

export default CountryList;
