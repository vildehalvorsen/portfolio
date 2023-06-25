import React from "react";
import DisplaySlider from "../../slider/DisplaySlider";
import { StyledSliderContainer } from "../../styledComponents/Containers";

export default function HomePage() {
  return (
    <div className="scroll--area">
      <StyledSliderContainer>
        <DisplaySlider />
      </StyledSliderContainer>
    </div>
  );
}
