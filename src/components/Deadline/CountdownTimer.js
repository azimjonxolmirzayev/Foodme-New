import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-12") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Std: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Protokoll: Math.floor((difference / 1000 / 60) % 60),
        Sekunden: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col justify-center items-center text-black rounded-sm border border-stroke  px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-base sm:text-lg font-medium uppercase mb-4">
          Your time is running out
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">
          Don't forget that time is running out! At the end of 14 days, your
          account will be automatically closed.
        </h2>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
          {Object.keys(timeLeft).map((interval, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {timeLeft[interval]}
              </div>
              <div className="uppercase text-sm sm:text-base lg:text-lg">
                {interval}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
