import styled, { keyframes } from "styled-components";


const TypingAnimation = keyframes`
0% {
  width: 0;
}
90% {
  width: 100%;
}
100% {
  width: 100%;
  border-right: 0px solid #fff;
}
`;


const StyledTitle = styled.div`
width: fit-content;
font-family: sans-serif;
font-size: .6em;
text-transform: uppercase;

h1 {
  position: relative;
  -webkit-text-stroke: .02vw #fff;
  color: #1a1a1a;
  white-space: nowrap;
}

h1::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  width: 0;
  height: 100%;
  overflow: hidden;
  border-right: 2px solid #fff;
  animation: ${TypingAnimation} 1.5s forwards 2s;
  white-space: nowrap;
}

@media (min-width: 320px) {
  font-size: .8em;
}

@media (min-width: 400px) {
  font-size: 1em;
}

@media (min-width: 700px) {
    font-size: 1.5em;
}

`;

const StyledH1 = styled.h1`
width: fit-content;
font-family: sans-serif;
font-size: 1.5em;
text-transform: uppercase;

@media (min-width: 320px) {
  font-size: 1.8em;
}

@media (min-width: 400px) {
  font-size: 2em;
}

@media (min-width: 700px) {
    font-size: 2.5em;
}
`;

const StyledH2 = styled.h2`
font-size: 1em;
@media (min-width: 320px) {
  font-size: 1.2em;
}

@media (min-width: 400px) {
  font-size: 1.5em;
}

@media (min-width: 700px) {
    font-size: 1.8em;
}

@media (min-width: 1000px) {
    font-size: 2em;
}
`; 


export { StyledTitle, StyledH1, StyledH2 };