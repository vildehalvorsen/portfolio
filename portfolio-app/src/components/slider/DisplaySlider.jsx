import React, { useState, useEffect } from "react";
import DisplayBox from '../boxes/DisplayBox';

export default function DisplaySlider() {
  const [rotation, setRotation] = useState(0);
  const rotationSpeed = 0.1;

  useEffect(() => {
    let animationFrame;

    const handleInteraction = (event) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const delta = getDeltaFromEvent(event) * rotationSpeed;
        setRotation((prevRotation) => prevRotation + delta);
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
        setRotation((prevRotation) => prevRotation - 10);
      } else if (keyCode === rightArrowKey) {
        setRotation((prevRotation) => prevRotation + 10);
      }
    };

    window.addEventListener('wheel', handleInteraction);
    window.addEventListener('touchmove', handleInteraction);
    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchmove', handleInteraction);
      window.removeEventListener('keydown', handleKeyboard);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="slider" style={{ transform: `rotateY(${rotation}deg)` }} >
      <DisplayBox i={0}/>
      <DisplayBox i={1} />
      <DisplayBox i={2} />  
    </div>
  )
}
