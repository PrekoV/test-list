import React, { useState } from "react";
import "./Pagination.scss";

export default function Pagination({ onClick, currPage }) {
  const [page, setPage] = useState(currPage);

  const goTo = (newPage) => {
    setPage(newPage);
    onClick(newPage);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <span
            className="page-link"
            aria-label="Previous"
            onClick={() => goTo(page - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </span>
        </li>
        {new Array(3).fill("").map((item, i) => (
          <li className="page-item" key={page + i + 1}>
            <span
              className={`page-link ${page + i === currPage ? "selected" : ""}`}
              onClick={() => goTo(page + i)}
            >
              {page + i + 1}
            </span>
          </li>
        ))}

        <li className="page-item">
          <span
            className="page-link"
            aria-label="Next"
            onClick={() => goTo(page + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
