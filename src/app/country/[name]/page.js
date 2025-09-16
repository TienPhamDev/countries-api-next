import BackButton from "@/components/backbutton/BackButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const DetailsCountryPage = async ({ params }) => {
  const { name } = await params;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    method: "GET",
    cache: "force-cache",
  });
  const data = await res.json();
  console.log(data);
  const border = data[0].borders;
  console.log(border);
  return (
    <section className="px-12">
      <BackButton />
      <div className="h-72  flex justify-between items-center flex-col md:flex-row">
        <div id="flags" className="relative w-[46%] h-full">
          <Image
            src={`${data[0].flags.svg}`}
            alt="flags"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[5px]"
          />
        </div>
        <div id="country-details" className="w-[46%] flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{data[0].name.official}</h1>

          <div className="grid grid-cols-2">
            <div>
              <p>
                <strong>Native name:</strong> {data[0].name.common}
              </p>
              <p>
                <strong>Population:</strong> {data[0].population}
              </p>
              <p>
                <strong>Region:</strong> {data[0].region}
              </p>
              <p>
                <strong>Sub Region:</strong> {data[0].subregion}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong> {data[0].subregion}
              </p>
              <p>
                <strong>Curencies:</strong> {data[0].subregion}
              </p>
              <p>
                <strong>Languages:</strong> {data[0].subregion}
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
      </div>
    </section>
  );
};

export default DetailsCountryPage;
