import styled from "styled-components";


const StyledNavBtn = styled.button`
appearance: none;
outline: none;
background: none;
border: none;
color: rgba(255,255,255,0.3);
font-size: 3em;
cursor: pointer;
padding: 5px 20px;

&:hover {
  color: #fff;
}

@media (min-width: 700px) {
  font-size: 4em;
}
`;

const StyledHomeBtn = styled(StyledNavBtn)`
margin-top: 5px;
font-size: 2em;

@media (min-width: 700px) {
  font-size: 3em;
}
`;


export { StyledNavBtn, StyledHomeBtn };