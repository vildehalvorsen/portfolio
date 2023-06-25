import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledProjectBox } from "../styledComponents/ProjectBox";

export default function DisplayProjectBoxes({ project, i }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const { id, title, color } = project;
  const navigate = useNavigate();

  const handleClick = () => {
    setIsZoomed(true);

    setTimeout(() => {
      setIsZoomed(false);
      navigate(`/projects/${id}`);
    }, 800);
  };

  return (
    <StyledProjectBox
      style={{ "--i": i }}
      color={color}
      onClick={handleClick}
      title={title}
      className={ isZoomed ? "zoom" : ""}
    >
      <div className="box--top"></div>
      <div>
        <span style={{ "--i": 0 }}>
          <p>{title}</p>
        </span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
      <div className="box--bottom"></div>
    </StyledProjectBox>
  );
}
