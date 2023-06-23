import styled from "styled-components";
import theme from "../../theme/theme";


const StyledBox = styled.div`
  position: absolute;
  width: ${theme.boxSize};
  height: ${theme.boxSize};
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(-10deg)
  translateZ(${theme.boxSpaceBetween});
  transition: transform 0.9s ease;
  cursor: pointer;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(${theme.boxMainColor}, ${(props) => props.color});
    transform: rotateY(calc(90deg * var(--i))) translateZ(${theme.boxHalfSize});
  }

  .box--top {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    background: ${theme.boxMainColor};
    transform: rotateX(90deg) translateZ(${theme.boxHalfSize});
  }

  .box--bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    background: ${(props) => props.color};
    transform: rotateX(90deg) translateZ(-${theme.boxHalfSize});
  }
`;

export { StyledBox };
