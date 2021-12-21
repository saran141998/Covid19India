import React from "react";
import "./Pagination.css";

export default function Pagination({
  postsPerpage,
  totalRecords,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRecords / postsPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination-wrapper">
        <button
          className={`btn ${currentPage === 599 && "highlight"}`}
          onClick={() => paginate(599)}
        >
          All
        </button>
        {pageNumbers.map((number) => (
          <button
            className={`btn ${currentPage === number && "highlight"}`}
            onClick={() => paginate(number)}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
