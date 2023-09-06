import React from "react";

function BoldTextInString({
  text,
  boldText,
}: {
  text: string;
  boldText: string[];
}) {
  return (
    <p>
      {text.split(" ").reduce(
        (accumulator: JSX.Element, word: string) => (
          <>
            {boldText.includes(word) ? (
              <>
                {accumulator} <strong className="font-semibold">{word}</strong>
              </>
            ) : (
              <>
                {accumulator} {word}
              </>
            )}
          </>
        ),
        <></>
      )}
    </p>
  );
}

export default BoldTextInString;
