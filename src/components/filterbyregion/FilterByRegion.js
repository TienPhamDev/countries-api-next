"use client";
import { useAppDispatch } from "@/redux/hooks";
import { filterRegion } from "@/redux/slices/countries.slice";
import { useState } from "react";

const {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} = require("../ui/select");

const FilterByRegion = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  console.log(value);
  const handdleChange = (newValue) => {
    setValue(newValue);
    dispatch(filterRegion(newValue));
  };
  return (
    <Select value={value} onValueChange={handdleChange}>
      <SelectTrigger
        size="h-14"
        className="w-[180px] border-0 px-6 py-6 h-14 shadow-[0px_2px_9px_0px_rgba(0,0,0,0.09)] dark:bg-blue-900 rounded-[5px]"
      >
        <SelectValue placeholder="Filter By Region" />
      </SelectTrigger>
      <SelectContent className="shadow-[0px_2px_9px_0px_rgba(0,0,0,0.09)] dark:bg-blue-900 rounded-[5px]">
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="americas">Americas</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterByRegion;
