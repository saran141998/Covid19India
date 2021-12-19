import React, { useState } from "react";
import "./CardDetailsStyles.css";

export default function CardDetails({
  deltaconfirmed,
  deltarecovered,
  deltadeceased,
  delta7confirmed,
  delta7recovered,
  delta7deceased,
  confirmed,
  recovered,
  deceased,
}) {
  const [counter, setCounter] = useState(0);
  const handleButton1 = () => {
    setCounter(0);
  };
  const handleButton2 = () => {
    setCounter(1);
  };
  const handleButton3 = () => {
    setCounter(2);
  };

  return (
    <div className="carousel">
      {counter !== 0 && (
        <button
          onClick={(e) => setCounter(counter - 1)}
          className="carousel_button carousel_button_left"
        >
          <i className="fas fa-angle-left"></i>
        </button>
      )}
      {counter === 0 && (
        <>
          <div className="_total">Total</div>
          <div className="_info">
            <span className="_confirmed">
              Confirmed: {confirmed.toLocaleString()}
            </span>
            <span className="_recovered">
              Recovered: {recovered.toLocaleString()}
            </span>
            <span className="_deceased">
              Deceased: {deceased.toLocaleString()}
            </span>
          </div>
        </>
      )}
      {counter === 1 && (
        <>
          <div className="_total">Delta</div>
          <div className="_info">
            <span className="_confirmed">
              Confirmed: {deltaconfirmed?.toLocaleString()}
            </span>
            <span className="_recovered">
              Recovered: {deltarecovered?.toLocaleString()}
            </span>
            <span className="_deceased">
              Deceased: {deltadeceased?.toLocaleString()}
            </span>
          </div>
        </>
      )}
      {counter === 2 && (
        <>
          <div className="_total">Delta7</div>
          <div className="_info">
            <span className="_confirmed">
              Confirmed: {delta7confirmed?.toLocaleString()}
            </span>
            <span className="_recovered">
              Recovered: {delta7recovered?.toLocaleString()}
            </span>
            <span className="_deceased">
              Deceased: {delta7deceased?.toLocaleString()}
            </span>
          </div>
        </>
      )}

      {counter !== 2 && (
        <button
          onClick={(e) => setCounter(counter + 1)}
          className="carousel_button carousel_button_right"
        >
          <i className="fas fa-angle-right"></i>
        </button>
      )}
      <div className="carousel_nav">
        <button
          onClick={handleButton1}
          className={`carousel_indicator ${counter === 0 && `current-slide`}`}
        ></button>
        <button
          onClick={handleButton2}
          className={`carousel_indicator ${counter === 1 && `current-slide`}`}
        ></button>
        <button
          onClick={handleButton3}
          className={`carousel_indicator ${counter === 2 && `current-slide`}`}
        ></button>
      </div>
    </div>
  );
}
