import React from "react";
import DisplayProjectBoxes from "../../boxes/DisplayProjectBoxes";
import projects from "../../../constants/api";
import { StyledProjectBoxContainer } from "../../styledComponents/Containers";
import { useNavigate } from "react-router-dom";
import NavButtons from "../../layout/NavButtons";

export default function ProjectsPage() {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate("/about");
  };

  const handleGoNext = () => {
    navigate("/design");
  };
  return (
    <>
    <NavButtons prev={handleGoBack} next={handleGoNext} prevDesc={"to about"} nextDesc={"to design"}/>
    <StyledProjectBoxContainer>
      {projects.map((project, i) => {
        return <DisplayProjectBoxes key={project.id} project={project} i={i} />;
      })}
    </StyledProjectBoxContainer>
    </>
  );
}
