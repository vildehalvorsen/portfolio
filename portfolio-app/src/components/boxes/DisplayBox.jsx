import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBox } from "../styledComponents/Boxes";

export default function DisplayBox({ i, navigation }) {
  const { color, fullTitle, firstTitle, lastTitle } = navigation;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${fullTitle}`);
  };
  
  

  return (
    <StyledBox
      style={{ "--i": i }}
      color={color}
      onClick={handleClick}
      title={fullTitle}
    >
      <div className="box--top"></div>
      <div>
        <span style={{ "--i": 0 }}>
          <p className="firstTitle">{firstTitle}</p>
        </span>
        <span style={{ "--i": 1 }}>
          <p className="lastTitle">{lastTitle}</p>
        </span>
        <span style={{ "--i": 2 }}>
          <p className={window.innerWidth <= 1000 ? "lastTitle back" : "firstTitle"}>
          {window.innerWidth <= 1000 ? lastTitle : firstTitle}
          </p>
        </span>
        <span style={{ "--i": 3 }}>
          <p className={window.innerWidth <= 1000 ? "firstTitle back" : "lastTitle"}>
          {window.innerWidth <= 1000 ? firstTitle : lastTitle}
          </p>
        </span>
      </div>
      <div className="box--bottom"></div>
    </StyledBox>
  );
}
