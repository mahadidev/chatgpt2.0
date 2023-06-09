"use client";
import React, { useEffect, useState } from "react";

const Typer = ({
  text,
  onIncreaseLine,
  onWritingFinish,
}: {
  text: string;
  onIncreaseLine?: CallableFunction;
  onWritingFinish?: CallableFunction;
}) => {
  const [completedTyping, setCompletedTyping] = useState<boolean>(false);
  const [displayResponse, setDisplayResponse] = useState<string>();

  useEffect(() => {
    setCompletedTyping(false);

    let i = 0;

    const intervalId = setInterval(() => {
      setDisplayResponse(text.slice(0, i));

      i++;
      if (onIncreaseLine) {
        onIncreaseLine();
      }
      if (i > text.length) {
        clearInterval(intervalId);
        setCompletedTyping(true);

        if (onWritingFinish) {
          onWritingFinish();
        }
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [text]);

  return <>{displayResponse}</>;
};

export default Typer;
