'use client'
import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { motivationalPhrases } from "../utils/Data";

type Props = {
    userData: Pick<User, 'name'>;
};

const MotivationalQuotes = ({ userData }: Props) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === motivationalPhrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000); // Change the interval to 20,000 milliseconds (20 seconds)

    return () => clearInterval(interval);
  }, []);

  const currentQuote = motivationalPhrases[currentQuoteIndex];
  const quoteWithUser = `${currentQuote}${userData.name?.toUpperCase()}`;

  return (
    <h1 className="xl:text-4xl text-4xl font-bold ">
      {quoteWithUser}
    </h1>
  );
};

export default MotivationalQuotes;
