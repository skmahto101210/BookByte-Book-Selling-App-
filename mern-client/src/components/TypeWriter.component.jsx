import React, { useEffect, useState } from "react";

export default function TypeWriter({ text, delay }) {
  const [currText, setCurrText] = useState("");
  const [currTextIndex, setCurrTextIndex] = useState(0);

  useEffect(() => {
    if (currTextIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrText((prevText) => prevText + text[currTextIndex]);
        setCurrTextIndex(currTextIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currText, delay, text]);

  return <span>{currText}</span>;
}
