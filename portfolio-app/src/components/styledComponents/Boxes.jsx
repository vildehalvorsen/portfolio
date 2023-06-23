import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";

const hoverEffect = keyframes`

0% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(-5deg)
  translateZ(${theme.boxSpaceBetween});
}

50% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(0deg)
  translateZ(${theme.boxSpaceBetween});
}

100% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(-5deg)
  translateZ(${theme.boxSpaceBetween});
}
`;

const StyledBox = styled.div`
  position: absolute;
  width: ${theme.boxSize};
  height: ${theme.boxSize};
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(-5deg)
    translateZ(${theme.boxSpaceBetween});
  transition: transform 0.9s ease;
  cursor: pointer;

  &:hover {
    animation: ${hoverEffect} .8s forwards ease-in-out;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(-30deg);
  }

  div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      ${theme.boxMainColor},
      ${(props) => props.color}
    );
    transform: rotateY(calc(90deg * var(--i))) translateZ(${theme.boxHalfSize});
    display: flex;
    align-items: center;

    p {
      font-family: "citrus-gothic-shadow", sans-serif;
      font-weight: 400;
      font-style: normal;
      color: #222;
      font-size: 40px;
      width: 100%;
    
      &.firstTitle {
        text-align: right;
      }
    }
  }

  .box--top {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    background: ${theme.boxMainColor};
    transform: rotateY(-30deg) rotateX(90deg) translateZ(${theme.boxHalfSize});
  }

  .box--bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    background: ${(props) => props.color};
    transform: rotateY(-30deg) rotateX(90deg) translateZ(-${theme.boxHalfSize});
  }
`;

export { StyledBox };
