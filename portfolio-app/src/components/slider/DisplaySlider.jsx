import React, { useState, useEffect } from "react";
import DisplayBox from "../boxes/DisplayBox";
import { StyledSlider } from "../styledComponents/Slider";
import navigation from "../../constants/navigation";

export default function DisplaySlider() {
  const [rotation, setRotation] = useState(0);
  const rotationSpeed = 0.1;
  const swipeThreshold = 10; // Minimum swipe distance to consider it as a swipe
  const swipeMultiplier = 0.2; // Multiplier for swipe scrolling intensity

  useEffect(() => {
    let animationFrame;
    let startTouchY = 0;
    let previousTouchY = 0;
    let touchVelocity = 0;

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

    const handleTouchStart = (event) => {
      startTouchY = event.touches[0].clientY;
      previousTouchY = startTouchY;
      touchVelocity = 0;
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      const currentTouchY = event.touches[0].clientY;
      const deltaY = currentTouchY - previousTouchY;
      const delta = deltaY * rotationSpeed;
      setRotation((prevRotation) => (prevRotation + delta) % 360);

      const touchTime = event.timeStamp;
      const elapsedTime = touchTime - event.touches[0].timeStamp;
      touchVelocity = Math.abs(deltaY / elapsedTime) * 1000; // Average velocity in pixels per second

      previousTouchY = currentTouchY;
    };

    const handleTouchEnd = () => {
      startTouchY = 0;
      previousTouchY = 0;

      // Apply additional scroll based on touch velocity when swiping
      if (touchVelocity > swipeThreshold) {
        const additionalScroll = touchVelocity * swipeMultiplier;
        setRotation((prevRotation) => (prevRotation + additionalScroll) % 360);
      }

      touchVelocity = 0;
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
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyboard);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <StyledSlider style={{ transform: `rotateY(${rotation}deg)` }}>
      {navigation.map((page, i) => {
        return <DisplayBox key={page.id} i={i} navigation={page} />;
      })}
    </StyledSlider>
  );
}
