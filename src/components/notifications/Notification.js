import React from "react";

const Notification = ({ message, onRetry, onDismiss }) => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 border border-gray-300 bg-white text-black flex flex-col md:flex-row items-center justify-between p-4 gap-3 rounded-lg shadow-lg transition-transform duration-500 max-w-xs md:max-w-sm">
      <div>
        <p className="font-semibold text-sm md:text-base">
          Nimadur xato ketdi!
        </p>
        <p className="text-xs md:text-sm mb-2">Iltimos qayta urinib ko'ring!</p>
      </div>
      <button
        onClick={onRetry}
        className="bg-lime-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-lime-600 transition text-xs md:text-sm"
      >
        Qaytadan
      </button>
    </div>
  );
};

export default Notification;
