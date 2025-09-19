"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CountryCard from "../countryItem/CountryItem";
import { useContext, useRef, useState } from "react";
import { setCountries } from "@/redux/slices/countries.slice";
import { PaginationPageContext } from "@/context/paginationPageContext";
const CountryList = () => {
  const { currentData } = useContext(PaginationPageContext);

  return (
    <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-18 pt-10">
      {currentData.map((country, index) => {
        return <CountryCard key={country.name + index} data={country} />;
      })}
    </section>
  );
};

export default CountryList;
