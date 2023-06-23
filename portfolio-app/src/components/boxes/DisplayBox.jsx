import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBox } from "../styledComponents/Boxes";
import projects from "../../constants/api";

export default function DisplayBox({ i, project }) {
  const { id, title, description, color, image } = project;
  const navigate = useNavigate();

  const handleClick = () => {
   navigate(`/projects/${id}`);
  }
  
  return (
    <StyledBox
      style={{ "--i": i }}
      color={color}
      onClick={handleClick}
    >
      <div className="box--top">{title}</div>
      <div>
        <span style={{ "--i": 0 }}>{title}</span>
        <span style={{ "--i": 1 }}>{title}</span>
        <span style={{ "--i": 2 }}>{title}</span>
        <span style={{ "--i": 3 }}>{title}</span>
      </div>
      <div className="box--bottom"></div>
    </StyledBox>
  );
}
