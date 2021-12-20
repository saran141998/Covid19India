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
          <i className="fas fa-angle-left angle-icon-color"></i>
        </button>
      )}
      {counter === 0 && (
        <div className="total_data">
          <div className="_total">Total</div>
          <div className="_info">
            <div className="_confirmed">
              <span>Confirmed: </span>
              <span>{confirmed.toLocaleString()}</span>
            </div>
            <div className="_recovered">
              <span>Recovered: </span>
              <span>{recovered.toLocaleString()}</span>
            </div>
            <div className="_deceased">
              <span>Deceased: </span>
              <span>{deceased.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
      {counter === 1 && (
        <div className="delta_data">
          <div className="_total">Delta</div>
          <div className="_info">
            <div className="_confirmed">
              <span>Confirmed: </span>
              <span>{deltaconfirmed.toLocaleString()}</span>
            </div>
            <div className="_recovered">
              <span>Recovered: </span>
              <span>{deltarecovered.toLocaleString()}</span>
            </div>
            <div className="_deceased">
              <span>Deceased: </span>
              <span>{deltadeceased.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
      {counter === 2 && (
        <div className="delta7_data">
          <div className="_total">Delta7</div>
          <div className="_info">
            <div className="_confirmed">
              <span>Confirmed: </span>
              <span>{delta7confirmed?.toLocaleString()}</span>
            </div>
            <div className="_recovered">
              <span>Recovered: </span>
              <span>{delta7recovered?.toLocaleString()}</span>
            </div>
            <div className="_deceased">
              <span>Deceased: </span>
              <span>{delta7deceased?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {counter !== 2 && (
        <button
          onClick={(e) => setCounter(counter + 1)}
          className="carousel_button carousel_button_right"
        >
          <i className="fas fa-angle-right angle-icon-color"></i>
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
