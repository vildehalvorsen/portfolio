import React from "react";
import { StyledTitle } from "../styledComponents/Typography";

export default function PageTitle(props) {
  return (
    <StyledTitle>
      <h1 data-text={props.content}>{props.content}</h1>
    </StyledTitle>
  );
}
