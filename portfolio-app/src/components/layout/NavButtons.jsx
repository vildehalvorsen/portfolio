import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledNavContainer } from "../styledComponents/Containers";
import { StyledNavBtn, StyledHomeBtn } from "../styledComponents/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

export default function NavButtons({ prev, next, prevDesc, nextDesc }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <StyledNavContainer>
        <StyledNavBtn onClick={prev} title={prevDesc}>
          &lt;
        </StyledNavBtn>

        <StyledHomeBtn onClick={goHome} title="Home">
          <FontAwesomeIcon icon={faSquare} />
        </StyledHomeBtn>

        <StyledNavBtn onClick={next} title={nextDesc}>
          &gt;
        </StyledNavBtn>
      </StyledNavContainer>
    </>
  );
}
