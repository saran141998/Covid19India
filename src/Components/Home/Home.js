import React, { useEffect, useState } from "react";
import "./Home.css";
import StateCard from "../StateCard/StateCard";
import axios from "axios";
import { STATE_NAMES } from "../../Constants";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeSeriesData, settimeSeriesData] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [dateChoosed, setDate] = useState("");
  const [sortOption, setSortOption] = useState("");
  useEffect(() => {
    axios
      .get("https://data.covid19india.org/v4/min/data.min.json")
      .then((res) => {
        setData(res.data);
      });
    axios
      .get("https://data.covid19india.org/v4/min/timeseries.min.json")
      .then((res) => {
        settimeSeriesData(res.data);
        setLoading(false);
      });
  }, []);

  const statekeys = Object.keys(data);
  Object.keys(data).forEach((key) => {
    data[key].fullname = STATE_NAMES[key];
  });
  let filteredState = statekeys.filter((key) =>
    data[key].fullname.toLowerCase().includes(searchfield.toLowerCase())
  );
  if (sortOption === "Sort by Confirmed Asc") {
    filteredState = Object.keys(data).sort((a, b) => {
      return data[a].total?.confirmed - data[b].total?.confirmed;
    });
  }
  if (sortOption === "Sort by Confirmed Desc") {
    filteredState = Object.keys(data).sort((a, b) => {
      return data[b].total?.confirmed - data[a].total?.confirmed;
    });
  }
  if (loading) {
    return (
      <div className="laoding">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <>
      <div className="message">
        <p>
          <span> </span>
        </p>
      </div>
      <div className="form-group">
        <div className="searchbox">
          <i className="fas fa-search search-icon"></i>
          <input
            type="search"
            placeholder="Enter State name"
            onChange={(e) => setSearchfield(e.target.value)}
          />
        </div>
        <div className="searchbox">
          <input
            type="date"
            min="2020-11-01"
            max="2021-09-30"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="searchbox">
          <select
            name="districts"
            id="districts"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Select an Option">Select an Option</option>
            <option value="Sort by Confirmed Asc">Sort by Confirmed Asc</option>
            <option value="Sort by Confirmed Desc">
              Sort by Confirmed Desc
            </option>
          </select>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid">
          {filteredState.map((key, index) => (
            <StateCard
              laoding={loading}
              key={index}
              statekey={key}
              timedata={timeSeriesData[key]["dates"]}
              datechoosen={dateChoosed}
              data={data[key]}
              districts={key !== "TT" ? Object.keys(data[key].districts) : []}
            />
          ))}
        </div>
      </div>
    </>
  );
}
