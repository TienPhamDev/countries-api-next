"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const itemsPerPage = 8; // Number of items per page

export default function PaginationPage({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  let startIdx = (currentPage - 1) * itemsPerPage; //keep track of index in country data
  let currentData = data.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  /*Pagination Page controls*/
  const paginationPage = [...Array(totalPages)].map(
    (page, index) => (page = index + 1)
  );
  let strIdxPages = currentPage - 1;
  let paginationPageData = paginationPage.slice(strIdxPages, strIdxPages + 3);

  return (
    <div>
      {/* Render paginated items */}
      {currentData.map((item, idx) => (
        <div key={idx}>{item.name.common}</div>
      ))}

      {/* Pagination controls */}
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        {paginationPageData.map((item, idx) => {
          return (
            <Link key={idx} href={"#"} onClick={() => setCurrentPage(item)}>
              {item}
            </Link>
          );
        })}
        <span>...</span>
        <Link href={"#"} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </Link>
      </span>
      <button onClick={handleNext} disabled={currentPage > totalPages}>
        Next
      </button>
    </div>
  );
}
