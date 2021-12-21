import React, { useState } from "react";
import "./DetailsTableStyles.css";
import { TABLE_COLUMNS, STATE_NAMES } from "../../Constants";
import Pagination from "../Pagination/Pagination";

export default function DetailsTable({ selectedDate, statekey, data }) {
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(60);
  let indexOfLastPage = currentPage * postPerPage;
  let indexOfFirstPage = indexOfLastPage - postPerPage;

  if (currentPage === 599) {
    indexOfLastPage = 599;
    indexOfFirstPage = 0;
  }
  const keys = selectedDate
    ? [selectedDate]
    : Object.keys(data).slice(indexOfFirstPage, indexOfLastPage);

  function sortTable(table, column, asc = true) {
    setSortAsc(asc);
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    const sortedRows = rows.sort((a, b) => {
      const aColText = a
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      const bColText = b
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();
      let ascending = 1 * dirModifier;
      let descending = -1 * dirModifier;
      return aColText > bColText ? ascending : descending;
    });
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }
    tBody.append(...sortedRows);
    table
      .querySelectorAll("th")
      .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table
      .querySelector(`th:nth-child(${column + 1})`)
      .classList.toggle("th-sort-asc", asc);
    table
      .querySelector(`th:nth-child(${column + 1})`)
      .classList.toggle("th-sort-desc", !asc);
  }
  const paginate = (number) => setCurrentPage(number);

  return (
    <div>
      {!selectedDate && (
        <Pagination
          totalRecords={599}
          postsPerpage={postPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}

      <table className="table">
        <caption>{STATE_NAMES[statekey]}</caption>
        <thead className="thead">
          <tr className="trhead">
            {TABLE_COLUMNS.map((columnName, i) => (
              <th className="th" key={i}>
                <div className="sort_wrap ">
                  <span>{columnName}</span>
                  {i !== 4 && i !== 5 && (
                    <span>
                      {!sortAsc ? (
                        <i
                          onClick={() =>
                            sortTable(document.querySelector("table"), i, true)
                          }
                          className="fas fa-sort-amount-up-alt pointer"
                        ></i>
                      ) : (
                        <i
                          onClick={() =>
                            sortTable(document.querySelector("table"), i, false)
                          }
                          className="fas fa-sort-amount-down-alt pointer"
                        ></i>
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {keys.map((d, i) => (
            <tr className="trbody" key={i}>
              <td data-label="Date" className="td">
                {d}
              </td>
              <td data-label="Confirmed" className="td">
                {data[d].total?.confirmed
                  ? data[d].total?.confirmed.toLocaleString()
                  : 0}
              </td>
              <td data-label="Recovered" className="td">
                {data[d].total?.recovered ? data[d].total?.recovered : 0}
              </td>
              <td data-label="Deceased" className="td">
                {data[d].total?.deceased ? data[d].total?.deceased : 0}
              </td>
              <td className="td">
                <div className="delta_cell">
                  <span className="_confirmed">
                    Confirmed:
                    {data[d].delta?.confirmed ? data[d].delta?.confirmed : 0}
                  </span>
                  <span className="_recovered">
                    Recovered:
                    {data[d].delta?.recovered ? data[d].delta?.recovered : 0}
                  </span>
                  <span className="_deceased">
                    Deceased :
                    {data[d].delta?.deceased ? data[d].delta?.deceased : 0}
                  </span>
                </div>
              </td>
              <td className="td">
                <div className="delta_cell">
                  <span className="_confirmed">
                    Confirmed:
                    {data[d].delta7?.confirmed ? data[d].delta7?.confirmed : 0}
                  </span>
                  <span className="_recovered">
                    Recovered:
                    {data[d].delta7?.recovered ? data[d].delta7?.recovered : 0}
                  </span>
                  <span className="_deceased">
                    Deceased :
                    {data[d].delta7?.deceased ? data[d].delta7?.deceased : 0}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
