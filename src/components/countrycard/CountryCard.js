import Image from "next/image";

const { Card, CardHeader, CardTitle, CardContent } = require("../ui/card");

const CountryCard = ({ data }) => {
  return (
    <Card className={"p-0 rounded-[5px] gap-0 "}>
      <CardHeader className={"px-0 rounded-t-[5px]"}>
        <div className="relative w-full h-32">
          <Image
            src={`${data.flags.svg}`}
            alt="flag"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-[5px]"
          />
        </div>
      </CardHeader>
      <CardContent className={"px-0"}>
        <CardTitle>{data.name.common}</CardTitle>
        <p>
          <strong>Population:</strong> {data.population}
        </p>
        <p>
          <strong>Region:</strong> {data.region}
        </p>
        <p>
          <strong>Capital:</strong> {data.capital}
        </p>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
