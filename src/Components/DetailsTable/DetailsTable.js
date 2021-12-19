import React from "react";
import "./DetailsTableStyles.css";
import { TABLE_COLUMNS, STATE_NAMES } from "../../Constants";

export default function DetailsTable({ selectedDate, statekey, data }) {
  const keys = selectedDate ? [selectedDate] : Object.keys(data);

  return (
    <div>
      <table className="table">
        <caption>{STATE_NAMES[statekey]}</caption>
        <thead className="thead">
          <tr className="trhead">
            {TABLE_COLUMNS.map((columnName, i) => (
              <th className="th" key={i}>
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {keys.map((d, i) => (
            <tr className="trbody" key={i}>
              <td className="td">{d}</td>
              <td className="td">
                {data[d].total?.confirmed ? data[d].total?.confirmed : 0}
              </td>
              <td className="td">
                {data[d].total?.recovered ? data[d].total?.recovered : 0}
              </td>
              <td className="td">
                {data[d].total?.deceased ? data[d].total?.deceased : 0}
              </td>
              <td className="td">
                Confirmed:
                {data[d].delta?.confirmed ? data[d].delta?.confirmed : 0}
                <br />
                Recovered:
                {data[d].delta?.recovered ? data[d].delta?.recovered : 0}
                <br />
                Deceased:{data[d].delta?.deceased ? data[d].delta?.deceased : 0}
              </td>
              <td className="td">
                Confirmed:
                {data[d].delta7?.confirmed ? data[d].delta7?.confirmed : 0}
                <br />
                Recovered:
                {data[d].delta7?.recovered ? data[d].delta7?.recovered : 0}
                <br />
                Deceased:
                {data[d].delta7?.deceased ? data[d].delta7?.deceased : 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
