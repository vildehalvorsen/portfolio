import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";

const hoverEffectMobile = keyframes`
0% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree}))
  translateZ(${theme.mobileBoxSpaceBetween}) rotateX(0deg);
}

50% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree}))
  translateZ(${theme.mobileBoxSpaceBetween}) rotateX(5deg);
}

100% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree}))
  translateZ(${theme.mobileBoxSpaceBetween}) rotateX(0deg);
}
`;

const hoverEffectDesktop = keyframes`

0% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(-5deg)
  translateZ(${theme.boxSpaceBetween});
}

50% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(5deg)
  translateZ(${theme.boxSpaceBetween});
}

100% {
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree})) rotateX(-5deg)
  translateZ(${theme.boxSpaceBetween});
}
`;

const StyledBox = styled.div`
  position: absolute;
  width: ${theme.mobileBoxSize};
  height: ${theme.mobileBoxSize};
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree}))
    translateZ(${theme.mobileBoxSpaceBetween});
  transition: transform 0.9s ease;
  cursor: pointer;

  &:hover {
    animation: ${hoverEffectMobile} 0.8s infinite ease-in-out;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateZ(90deg) rotateY(-40deg) rotateX(-20deg);
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
    transform: rotateY(calc(90deg * var(--i)))
      translateZ(${theme.mobileBoxHalfSize});
    display: flex;
    align-items: center;

    p {
      font-family: "citrus-gothic-shadow", sans-serif;
      font-weight: 400;
      font-style: normal;
      color: #222;
      font-size: 25px;
      width: 100%;

      &.firstTitle {
        text-align: right;
      }
      
      &.firstTitle.back {
        transform: rotateZ(180deg);
      }
      
      &.lastTitle.back {
        transform: rotateZ(180deg);
        text-align: left;
      }
    }
  }

  .box--top {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.mobileBoxSize};
    height: ${theme.mobileBoxSize};
    background: ${theme.boxMainColor};
    transform: rotateZ(90deg) rotateY(-40deg) rotateX(-110deg)
      translateZ(-${theme.mobileBoxHalfSize});
  }

  .box--bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.mobileBoxSize};
    height: ${theme.mobileBoxSize};
    background: ${(props) => props.color};
    transform: rotateZ(90deg) rotateY(-40deg) rotateX(-110deg)
      translateZ(${theme.mobileBoxHalfSize});
  }

  @media (min-width: 700px) {
    width: ${theme.tabletBoxSize};
    height: ${theme.tabletBoxSize};
    transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree}))
      translateZ(${theme.tabletBoxSpaceBetween});

    div span {
      transform: rotateY(calc(90deg * var(--i)))
        translateZ(${theme.tabletBoxHalfSize});

      p {
        font-size: 35px;
      }
    }

    .box--top {
      width: ${theme.tabletBoxSize};
      height: ${theme.tabletBoxSize};
      transform: rotateZ(90deg) rotateY(-40deg) rotateX(-110deg)
        translateZ(-${theme.tabletBoxHalfSize});
    }

    .box--bottom {
      width: ${theme.tabletBoxSize};
      height: ${theme.tabletBoxSize};
      transform: rotateZ(90deg) rotateY(-40deg) rotateX(-110deg)
        translateZ(${theme.tabletBoxHalfSize});
    }
  }

  @media (min-width: 1000px) {
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    transform: rotateY(calc(var(--i) * ${theme.boxAlignDegree}))
      translateZ(${theme.boxSpaceBetween}) rotateX(-5deg);

    &:hover {
      animation-name: ${hoverEffectDesktop};
    }

    div {
      transform: rotateY(-30deg);
    }

    div span {
      transform: rotateY(calc(90deg * var(--i)))
        translateZ(${theme.boxHalfSize});
        
        p {
          font-size: 40px;
        }
    }

    .box--top {
      width: ${theme.boxSize};
      height: ${theme.boxSize};
      transform: rotateY(-30deg) rotateX(90deg) translateZ(${theme.boxHalfSize});
    }

    .box--bottom {
      width: ${theme.boxSize};
      height: ${theme.boxSize};
      transform: rotateY(-30deg) rotateX(90deg)
        translateZ(-${theme.boxHalfSize});
    }
  }
`;

export { StyledBox };
