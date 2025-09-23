"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { PaginationPageContext } from "@/context/paginationPageContext";
import { Button } from "../ui/button";
export default function PaginationPage() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 8; // Number of items per page

  // let startIdx = (currentPage - 1) * itemsPerPage; //keep track of index in country data
  // let currentData = data.slice(startIdx, startIdx + itemsPerPage);

  // const totalPages = Math.ceil(data.length / itemsPerPage);

  // const handlePrevious = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  // const handleNext = () => {
  //   setCurrentPage((prev) => prev + 1);
  // };

  // /*Pagination Page controls*/
  // const paginationPage = [...Array(totalPages)].map(
  //   (page, index) => (page = index + 1)
  // );
  // let strIdxPages = currentPage - 1;
  // let paginationPageData = paginationPage.slice(strIdxPages, strIdxPages + 3);
  const {
    handleNext,
    handlePrevious,
    currentPage,
    setCurrentPage,
    paginationPageData,
    totalPages,
  } = useContext(PaginationPageContext);
  return (
    <div className="w-full flex gap-4 justify-center mt-12 items-center">
      {/* Render paginated items */}
      {/* {currentData.map((item, idx) => (
        <div key={idx}>{item.name.common}</div>
      ))} */}

      {/* Pagination controls */}
      <Button
        onClick={handlePrevious}
        variant={"outline"}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span>
        {paginationPageData.map((item, idx) => {
          return (
            <Link key={idx} href={"#"} onClick={() => setCurrentPage(item)}>
              {item}{" "}
            </Link>
          );
        })}
        <span> ... </span>
        <Link href={"#"} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </Link>
      </span>
      <Button
        onClick={handleNext}
        variant={"outline"}
        disabled={currentPage > totalPages}
      >
        Next
      </Button>
    </div>
  );
}
