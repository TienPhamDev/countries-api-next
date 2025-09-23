"use client";
import { createContext, useState } from "react";
export const PaginationPageContext = createContext();
export function PaginationPageProvider({ data, children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  let startIdx = (currentPage - 1) * itemsPerPage; //keep track of index in country data
  let currentData = data.slice(startIdx, startIdx + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  /*Pagination Page controls*/
  const paginationPage = [...Array(totalPages)].map(
    (page, index) => (page = index + 1)
  );
  let strIdxPages = currentPage - 1;
  let paginationPageData = paginationPage.slice(strIdxPages, strIdxPages + 3);

  return (
    <PaginationPageContext.Provider
      value={{
        totalPages,
        currentData,
        handlePrevious,
        handleNext,
        setCurrentPage,
        paginationPageData,
      }}
    >
      {children}
    </PaginationPageContext.Provider>
  );
}
