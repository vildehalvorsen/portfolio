import styles from "styled-components";
import theme from "../../theme/theme";

const StyledSlider = styles.div`
position: relative;
width: ${theme.boxSize};
height: 0;
transform-style: preserve-3d;
`;

export { StyledSlider };
