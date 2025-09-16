import BackButton from "@/components/backbutton/BackButton";
import CountryDetailsInfo from "@/components/countrydetailinfor/CountryDetailsInfo";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
const DetailsCountryPage = async ({ params }) => {
  const { name } = await params;
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
    method: "GET",
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <section className="px-12">
      <BackButton />
      <div className="h-72  flex justify-between items-center flex-col md:flex-row">
        <div id="flags" className="relative w-[46%] h-full">
          <Image
            src={`${data[0].flags.svg}`}
            priority={false}
            alt="flags"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[5px]"
          />
        </div>
        <CountryDetailsInfo
          id="country-details"
          className="w-[46%] flex flex-col gap-4"
          data={data[0]}
        />
      </div>
    </section>
  );
};

export default DetailsCountryPage;
