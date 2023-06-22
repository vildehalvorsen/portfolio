import styled from "styled-components";
import theme from "../../theme/theme";


const StyledBox = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
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
    transform: rotateY(calc(90deg * var(--i))) translateZ(50px);
  }

  .box--top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: ${theme.boxMainColor};
    transform: rotateX(90deg) translateZ(50px);
  }

  .box--bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: ${(props) => props.color};
    transform: rotateX(90deg) translateZ(-50px);
  }
`;

export { StyledBox };
