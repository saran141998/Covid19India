import React from "react";
import "./DistrictList.css";

export default function DistrictList({ districts, onDistrictChange }) {
  return (
    <div className="custom-scroller">
      <select
        name="districts"
        id="districts"
        onChange={(e) => onDistrictChange(e.target.value)}
      >
        <option value="Select an Option">Select an Option</option>
        {districts.map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}
