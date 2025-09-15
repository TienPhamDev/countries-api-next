import BackButton from "@/components/backbutton/BackButton";
import Image from "next/image";
const DetailsCountryPage = async ({ params }) => {
  const countryName = await params.name;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
    {
      method: "GET",
      cache: "force-cache",
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <section className="px-12">
      <BackButton />
      {data[0].name.official}
      <div className="h-72">
        <div id="flags" className="relative w-full h-full">
          <Image
            src={`${data[0].flags.svg}`}
            alt="flags"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[5px]"
          />
        </div>
        <div id="country-details"></div>
      </div>
    </section>
  );
};

export default DetailsCountryPage;
