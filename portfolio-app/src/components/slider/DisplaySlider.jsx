import React, { useState, useEffect } from "react";
import DisplayBox from "../boxes/DisplayBox";
import { StyledSlider } from "../styledComponents/Slider";
import navigation from "../../constants/navigation";

export default function DisplaySlider() {
  const [rotation, setRotation] = useState(0);
  const rotationSpeed = 0.1;

  useEffect(() => {
    let animationFrame;

    const handleInteraction = (event) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const delta = getDeltaFromEvent(event) * rotationSpeed;
        setRotation((prevRotation) => (prevRotation + delta) % 360);
      });
    };

    const getDeltaFromEvent = (event) => {
      if (event.deltaY) {
        return event.deltaY;
      } else if (event.touches && event.touches[0]) {
        const { clientY, screenY } = event.touches[0];
        return clientY - screenY;
      } else {
        return 0;
      }
    };

    const handleKeyboard = (event) => {
      const { keyCode } = event;
      const leftArrowKey = 37;
      const rightArrowKey = 39;

      if (keyCode === leftArrowKey) {
        setRotation((prevRotation) => (prevRotation - 10) % 360);
      } else if (keyCode === rightArrowKey) {
        setRotation((prevRotation) => (prevRotation + 10) % 360);
      }
    };

    window.addEventListener("wheel", handleInteraction);
    window.addEventListener("touchmove", handleInteraction);
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
      window.removeEventListener("keydown", handleKeyboard);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <>
    <StyledSlider style={{ transform: `rotateY(${rotation}deg)` }}>
      {navigation.map((page, i) => {
        return (
          <DisplayBox
            key={page.id}
            i={i}
            navigation={page}
          />
        );
      })}
    </StyledSlider>
    </>
  );
}
