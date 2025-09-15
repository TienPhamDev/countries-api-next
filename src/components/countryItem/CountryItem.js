import Image from "next/image";
import Link from "next/link";

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
      <CardContent className={"px-2 h-36"}>
        <Link
          className={"font-bold text-xl py-2"}
          href={`/country/${data.name.common}`}
        >
          {data.name.common}
        </Link>
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
