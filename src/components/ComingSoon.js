import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center sticky top-25 opacity-85 mb-8 justify-center text-black rounded-sm border border-stroke py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark dark:text-white">
      <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      <p className="text-xl mb-8">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-transparent border border-purple-600 hover:shadow-1 font-semibold py-2 px-4 rounded"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
