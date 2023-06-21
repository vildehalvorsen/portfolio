import React from "react";

export default function DisplayBox({ i }) {
  return (
    <div style={{ "--i": i }} className="cube">
      <div className="cube--top"></div>
      <div>
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className="cube--bottom"></div>
    </div>
  );
}
