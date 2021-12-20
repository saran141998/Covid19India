import React from "react";
import "./LoadingComponentStyles.css";

export default function LoadingComponent() {
  return (
    <div className="make-center">
      <div className="bounce-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
