import styled from "styled-components";
import theme from "../../theme/theme";

const StyledSliderContainer = styled.div`
perspective: 700px;
transform-origin: center;
width: 0;
height: 0;
transform: rotateZ(270deg) translate(-50%, -50%);
margin-left: -5%;
position: absolute;
top: 50%;
left: 50%;

@media (min-width: 1000px) {
  margin-top: -100px;
  transform: rotateZ(0deg);
}
`;

const StyledProjectBoxContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 80vh;
width: 100vw;

@media (min-width: 700px) {
  flex-direction: row;
}
`;

const StyledProjectContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
max-width: 700px;
padding: 0 5px;
margin: 100px auto;

.project--tech {
  margin: 10px 0;
  font-weight: bolder;
}

.project--links {
  margin-bottom: 10px;
  a {
    color: ${theme.boxFirstColor};
  }
}

.project--description {
  max-width: 680px;
  p {
    font-size: .9em;
    padding-right: 10px;
  }
}

.project--images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  img {
    width: 100%;
    max-width: 700px;
    height: 100%;
    object-fit: cover;
    object-position: top;
    margin: 20px 20px 20px 0;
    border-radius: 10px;
    
    &.mobile {
    max-width: 300px;
    height: 100%;
    }
  }
}

@media (min-width: 700px) {
  margin-top: 150px;
  .project--tech {
    font-size: 1.2em;
    margin: 10px 0;
  }
  
  .project--description {
    p {
      font-size: 1em;
    }
  }
}

@media (min-width: 1000px) {
  .project--description {
    max-width: 700px;
  }
}
`;

const StyledAboutContainer = styled.div`
margin: 100px auto;
width: 100%;
max-width: 500px;
`;

const StyledNavContainer = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`;

export {
  StyledProjectBoxContainer,
  StyledSliderContainer,
  StyledProjectContainer,
  StyledAboutContainer,
  StyledNavContainer,
};
