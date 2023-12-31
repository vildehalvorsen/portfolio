import styled from "styled-components";
import theme from "../../theme/theme";

const StyledSlider = styled.div`
position: relative;
width: ${theme.mobileBoxSize};
height: 0;
transform-style: preserve-3d;

@media (min-width: 1000px) {
  width: ${theme.boxSize};
}
`;

export { StyledSlider };
