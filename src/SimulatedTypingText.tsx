import React, { useState, useEffect } from "react";

const SimulatedTypingText = (props: { prefix: string; words: string[] }) => {
  const [displayedPhrase, setDisplayedPhrase] = useState(
    props.words[0] ? props.words[0] : "Idiot"
  );

  const [prefix, _setPrefix] = useState(props.prefix ? props.prefix : "I am a");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * props.words.length);
      const newText = props.words[randomIndex];
      setDisplayedPhrase(newText);
    }, 3000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <div>
      <div className="inline">
        <div className="inline-block mr-2">{prefix}</div>
        <div className="inline-block border-b-4 border-blue-300">
          {displayedPhrase}
        </div>
      </div>
      <div className="border-r-4 border-white animate-fadeIn h-10 w-1 ml-1 inline"></div>
    </div>
  );
};

export default SimulatedTypingText;
