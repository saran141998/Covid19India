import axios from "axios";
import "./StateDetailStyles.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsTable from "../DetailsTable/DetailsTable";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function StateDetail() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const { key } = useParams();
  useEffect(() => {
    axios
      .get("https://data.covid19india.org/v4/min/timeseries.min.json")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div className="form-group">
        <input
          type="date"
          min="2020-11-01"
          max="2021-09-30"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="table-container">
        <DetailsTable
          selectedDate={date}
          statekey={key}
          data={data[key]["dates"]}
        />
      </div>
    </div>
  );
}
