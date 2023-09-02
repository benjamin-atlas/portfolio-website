import { useState, useEffect } from "react";

const SimulatedTypingText = (props: { prefix: string; words: string[] }) => {
  const [displayedPhrase, setDisplayedPhrase] = useState(
    props.words[0] ? props.words[0] : "Idiot"
  );

  const [prefix, _setPrefix] = useState(props.prefix ? props.prefix : "I am a");

  const [typedText, setTypedText] = useState("");
  const [backspacing, setBackspacing] = useState(false);

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      const randomIndex: number = Math.floor(
        Math.random() * props.words.length
      );
      const newText: string = props.words[randomIndex];
      setDisplayedPhrase(newText);
    }, 8000); // Compute the switch based on the longest word + characters per second + some delay

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once on component mount

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      if (typedText === displayedPhrase) {
        setBackspacing(true);
      }

      if (typedText === "") {
        // Probably want to ask, "would the eventually-backspaced substr
        // match a substr of the same length for the next queued up word?""
        // to simulate real typing.
        setBackspacing(false);
      }

      setTypedText(
        displayedPhrase.substring(
          0,
          backspacing ? typedText.length - 1 : typedText.length + 1
        )
      );
    }, 150);

    return () => clearInterval(intervalId);
  }, [typedText, backspacing]);

  return (
    <div>
      <div className="inline">
        <div className="inline-block border-b-4 border-transparent mr-2">
          {prefix}
        </div>
        <div className="inline-block border-b-4 border-blue-300">
          {typedText}
        </div>
      </div>
      <div className="border-r-4 border-white animate-fadeIn h-10 w-1 ml-1 inline"></div>
    </div>
  );
};

export default SimulatedTypingText;
