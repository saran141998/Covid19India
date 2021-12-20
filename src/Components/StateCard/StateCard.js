import React, { useState } from "react";
import "./StateCardStyle.css";
import DistrictList from "../DistrictList/DistrictList";
import CardDetails from "../CardDetails/CardDetails";
import { Link } from "react-router-dom";

export default function StateCard({
  statekey,
  timedata,
  datechoosen,
  data,
  districts,
}) {
  const [district, setDistrict] = useState("");

  const { confirmed, recovered, deceased } = timedata[datechoosen]?.total
    ? timedata[datechoosen]?.total
    : !district || district === "Select an Option"
    ? data.total
    : data["districts"][district].total;
  const deltaconfirmed = timedata[datechoosen]?.delta?.confirmed
    ? timedata[datechoosen]?.delta?.confirmed
    : !district || district === "Select an Option"
    ? data.delta?.confirmed
    : data["districts"][district].delta?.confirmed;

  const deltarecovered = timedata[datechoosen]?.delta?.recovered
    ? timedata[datechoosen]?.delta?.recovered
    : !district || district === "Select an Option"
    ? data.delta?.recovered
    : data["districts"][district].delta?.recovered;

  const deltadeceased = timedata[datechoosen]?.delta?.deceased
    ? timedata[datechoosen]?.delta?.deceased
    : !district || district === "Select an Option"
    ? data.delta?.deceased
    : data["districts"][district].delta?.deceased;
  const delta7confirmed = timedata[datechoosen]?.delta7?.confirmed
    ? timedata[datechoosen]?.delta7?.confirmed
    : !district || district === "Select an Option"
    ? data.delta7?.confirmed
    : data["districts"][district].delta7?.confirmed;

  const delta7recovered = timedata[datechoosen]?.delta7?.recovered
    ? timedata[datechoosen]?.delta7?.recovered
    : !district || district === "Select an Option"
    ? data.delta7?.recovered
    : data["districts"][district].delta7?.recovered;

  const delta7deceased = timedata[datechoosen]?.delta?.deceased
    ? timedata[datechoosen]?.delta?.deceased
    : !district || district === "Select an Option"
    ? data.delta?.deceased
    : data["districts"][district].delta?.deceased;

  return (
    <div className="card">
      <div className="flex">
        <div>
          <Link className="statename" to={`/detailedview/${statekey}`}>
            <p>{data.fullname}</p>
          </Link>
        </div>

        <div>
          <DistrictList
            districts={districts}
            onDistrictChange={(d) => setDistrict(d)}
          />
        </div>
      </div>
      {confirmed && recovered && deceased ? (
        <CardDetails
          confirmed={confirmed ? confirmed : 0}
          recovered={recovered ? recovered : 0}
          deceased={deceased ? deceased : 0}
          deltaconfirmed={deltaconfirmed ? deltaconfirmed : 0}
          deltarecovered={deltarecovered ? deltarecovered : 0}
          deltadeceased={deltadeceased ? deltadeceased : 0}
          delta7confirmed={delta7confirmed ? delta7confirmed : 0}
          delta7recovered={delta7recovered ? delta7recovered : 0}
          delta7deceased={delta7deceased ? delta7deceased : 0}
        />
      ) : (
        "Not found"
      )}
    </div>
  );
}
