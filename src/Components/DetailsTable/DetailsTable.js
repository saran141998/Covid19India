import React, { useEffect, useState } from "react";
import "./DetailsTableStyles.css";
import { STATE_NAMES } from "../../Constants";
import Pagination from "../Pagination/Pagination";

export default function DetailsTable({ statekey, data }) {
  const [sortDate, setSortDate] = useState();
  const [dateChoosen, setDateChoosen] = useState();
  const [sortConfirmed, setSortConfirmed] = useState("");
  const [sortRecovered, setSortRecovered] = useState("");
  const [sortDeceased, setSortDeceased] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [keys, setkeys] = useState([]);
  const [postPerPage] = useState(60);
  let indexOfLastPage = currentPage * postPerPage;
  let indexOfFirstPage = indexOfLastPage - postPerPage;
  if (currentPage === 599) {
    indexOfLastPage = 599;
    indexOfFirstPage = 0;
  }
  useEffect(() => {
    setkeys(
      dateChoosen
        ? [dateChoosen]
        : Object.keys(data).slice(indexOfFirstPage, indexOfLastPage)
    );
  }, [currentPage, dateChoosen]);

  const handleSortDateAsc = () => {
    setSortDate(true);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return 1;
        })
    );
  };
  const handleSortDateDesc = () => {
    setSortDate(false);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return -1;
        })
    );
  };

  const handleSortConfirmedAsc = () => {
    setSortConfirmed(true);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return data[a].total?.confirmed - data[b].total?.confirmed;
        })
    );
  };
  const handleSortConfirmedDesc = () => {
    setSortConfirmed(false);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return data[b].total?.confirmed - data[a].total?.confirmed;
        })
    );
  };
  const handleSortRecoveredAsc = () => {
    setSortRecovered(true);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return data[a].total?.recovered - data[b].total?.recovered;
        })
    );
  };
  const handleSortRecoveredDesc = () => {
    setSortRecovered(false);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return data[b].total?.recovered - data[a].total?.recovered;
        })
    );
  };
  const handleSortDeceasedAsc = () => {
    setSortDeceased(true);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return data[a].total?.deceased - data[b].total?.deceased;
        })
    );
  };
  const handleSortDeceasedDesc = () => {
    setSortDeceased(false);
    setkeys(
      Object.keys(data)
        .slice(indexOfFirstPage, indexOfLastPage)
        .sort((a, b) => {
          return data[b].total?.deceased - data[a].total?.deceased;
        })
    );
  };

  const paginate = (number) => setCurrentPage(number);

  return (
    <div>
      <div className="form-group">
        <input
          type="date"
          min="2020-11-01"
          max="2021-09-30"
          onChange={(e) => setDateChoosen(e.target.value)}
        />
      </div>
      {!dateChoosen && (
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
            <th className="th">
              <div className="sort_wrap ">
                <span>Date</span>
                <span>
                  {!sortDate ? (
                    <i
                      onClick={handleSortDateAsc}
                      className="fas fa-sort-amount-up-alt pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={handleSortDateDesc}
                      className="fas fa-sort-amount-down-alt pointer"
                    ></i>
                  )}
                </span>
              </div>
            </th>
            <th className="th">
              <div className="sort_wrap ">
                <span>Confirmed</span>
                <span>
                  {!sortConfirmed ? (
                    <i
                      onClick={handleSortConfirmedAsc}
                      className="fas fa-sort-amount-up-alt pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={handleSortConfirmedDesc}
                      className="fas fa-sort-amount-down-alt pointer"
                    ></i>
                  )}
                </span>
              </div>
            </th>
            <th className="th">
              <div className="sort_wrap ">
                <span>Recovered</span>
                <span>
                  {!sortRecovered ? (
                    <i
                      onClick={handleSortRecoveredAsc}
                      className="fas fa-sort-amount-up-alt pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={handleSortRecoveredDesc}
                      className="fas fa-sort-amount-down-alt pointer"
                    ></i>
                  )}
                </span>
              </div>
            </th>
            <th className="th">
              <div className="sort_wrap ">
                <span>Deceased</span>
                <span>
                  {!sortDeceased ? (
                    <i
                      onClick={handleSortDeceasedAsc}
                      className="fas fa-sort-amount-up-alt pointer"
                    ></i>
                  ) : (
                    <i
                      onClick={handleSortDeceasedDesc}
                      className="fas fa-sort-amount-down-alt pointer"
                    ></i>
                  )}
                </span>
              </div>
            </th>
            <th className="th">
              <div className="sort_wrap ">
                <span>Delta</span>
              </div>
            </th>
            <th className="th">
              <div className="sort_wrap ">
                <span>Delta7</span>
              </div>
            </th>
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
