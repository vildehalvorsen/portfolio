import React from "react";
import PageTitle from "../../layout/Headings";
import { StyledAboutContainer } from "../../styledComponents/Containers";
import NavButtons from "../../layout/NavButtons";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate("/design");
  };

  const handleGoNext = () => {
    navigate("/projects");
  };
  
  return (
    <>
    <NavButtons prev={handleGoBack} next={handleGoNext} prevDesc={"to design"} nextDesc={"to projects"}/>
    <StyledAboutContainer>
      <PageTitle content="Vilde Halvorsen" />

      <p>
        I'm a frontend junior with an insatiable appetite for learning. I'm
        armed with my freshly acquired front-end development education and ready
        to conquer the digital world! You know that strangely satisfying feeling
        of immersing yourself in code? Well, I thrive on it. I can spend hours
        in a focused state, battling those pesky bugs and tweaking on every
        detail to make the code as neat as possible.
      </p>
    </StyledAboutContainer>
    </>
  );
}
