import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Frontend Developer", "Full Stack Developer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[index];

      setCurrentText(fullText.substring(0, currentText.length + (isForward ? 1 : -1)));

      if (isForward && currentText.length === fullText.length) {
        setIsForward(false);
      } else if (!isForward && currentText.length === 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentText, isForward, index]);

  return <div className="font-cursive">{currentText}</div>;
};

export default TextChange;
