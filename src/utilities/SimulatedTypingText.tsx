import { useState, useEffect } from "react";

const SimulatedTypingText = (props: { prefix: string; words: string[] }) => {
  const [nextPhrase, setNextPhrase] = useState(
    props.words[0] ? props.words[0] : "Idiot"
  );
  const [prefix, _setPrefix] = useState(props.prefix ? props.prefix : "I am a");
  const [typedText, setTypedText] = useState("");
  const [backspacing, setBackspacing] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      let randomIndex: number = Math.floor(Math.random() * props.words.length);
      let newText: string = props.words[randomIndex];

      // random without duplicates.
      while (props.words[randomIndex] === nextPhrase) {
        randomIndex = Math.floor(Math.random() * props.words.length);
        newText = props.words[randomIndex];
      }
      setNextPhrase(newText);
      setTyping(true);
      setBackspacing(true);
    }, 4000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [backspacing]);

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      if (backspacing) {
        // Reuse start of string if it matches the next word, like real life!
        if (
          typedText.substring(0, typedText.length - 1) ==
          nextPhrase.substring(0, typedText.length - 1)
        ) {
          setBackspacing(false);
        }

        setTypedText(typedText.substring(0, typedText.length - 1));
      } else {
        if (typedText.length !== nextPhrase.length) {
          setTypedText(nextPhrase.substring(0, typedText.length + 1));
        } else {
          setTyping(false);
        }
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [nextPhrase, typedText, backspacing]);

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
      <div
        className={
          "border-r-4 border-white h-10 w-1 ml-1 inline" +
          (typing ? "" : " animate-fadeIn")
        }
      ></div>
    </div>
  );
};

export default SimulatedTypingText;
