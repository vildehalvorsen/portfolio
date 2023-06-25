import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavButtons from '../../layout/NavButtons';
import { StyledH1 } from "../../styledComponents/Typography";

export default function DesignPage() {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate("/projects");
  };

  const handleGoNext = () => {
    navigate("/about");
  };
  return (
    <>
    <NavButtons prev={handleGoBack} next={handleGoNext} prevDesc={"to design"} nextDesc={"to projects"}/>
    <StyledH1>Comin soon</StyledH1>
    </>
  )
}
