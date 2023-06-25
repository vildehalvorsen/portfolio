import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme";

const zoomAnimation = keyframes`
0% {
  z-index: 1000;
}
100% {
  perspective: 10px;
  z-index: 1000;
}
`;

const hoverEffectMobile = keyframes`
0% {
  transform: rotateY(0deg);
}

50% {
  transform: rotateY(10deg);
}

100% {
  transform: rotateY(0deg);
}
`;


const StyledProjectBox = styled.div`
  width: ${theme.boxSize};
  height: ${theme.boxSize};
  transform-style: preserve-3d;
  transition: transform 0.9s ease;
  cursor: pointer;
  perspective: 1000px;
  
  &:hover {      
    animation: ${hoverEffectMobile} 1s infinite ease;
  }

  &.zoom {
    animation: ${zoomAnimation} .8s forwards;
  }
  
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(-10deg) rotateX(-5deg);
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
      translateZ(${theme.boxHalfSize});
    display: flex;
    align-items: center;
    
    p {
      font-family: "citrus-gothic-shadow", sans-serif;
      font-weight: 400;
      font-style: normal;
      color: #222;
      font-size: 15px;
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }
  }

  .box--top {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    background: ${theme.boxMainColor};
    transform: rotateY(-10deg) rotateX(85deg)
      translateZ(${theme.boxHalfSize});
  }

  .box--bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.boxSize};
    height: ${theme.boxSize};
    background: ${(props) => props.color};
    transform: rotateY(-10deg) rotateX(85deg)
      translateZ(-${theme.boxHalfSize});
  }
  
  @media (min-width: 700px) {
    width: 150px;
    height: 150px;

    div {
      transform: rotateY(10deg) rotateX(-5deg);
    }
    
    div span {
      transform: rotateY(calc(90deg * var(--i)))
        translateZ(75px);
      p {
        font-size: 20px;
      }
    }
  
    .box--top {
      width: 150px;
      height: 150px;
      transform: rotateY(10deg) rotateX(85deg)
        translateZ(75px);
    }
  
    .box--bottom {
      width: 150px;
      height: 150px;
      transform: rotateY(10deg) rotateX(85deg)
        translateZ(-75px);
    }
  }
`;

export { StyledProjectBox };
