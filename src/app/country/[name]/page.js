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
  const countryName = await params.name;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`,
    {
      method: "GET",
      cache: "force-cache",
    }
  );
  const data = await res.json();
  console.log(data);
  const border = data[0].borders;
  console.log(border);
  return (
    <section className="px-12">
      <BackButton />
      <div className="h-72  flex justify-between items-center flex-col md:flex-row">
        <div id="flags" className="relative w-[45%] h-full">
          <Image
            src={`${data[0].flags.svg}`}
            alt="flags"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[5px]"
          />
        </div>
        <Card id="country-details" className="w-[45%]">
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              {data[0].name.official}
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter>
            <span>
              Border :{" "}
              {border === undefined ? "No border with any country." : border}
            </span>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DetailsCountryPage;
