import React from "react";

const Notification = ({ message, onRetry, onDismiss }) => {
  return (
    <div className="fixed bottom-4 right-4 border border-gray-300 bg-white items-center justify-between text-black flex p-4 gap-3 rounded-lg shadow-lg transition-transform duration-500">
      <div>
        <p className="font-semibold">Nimadur xato ketdi!</p>
        <p className="mb-2">Iltimos qayta urinib ko'ring!</p>
      </div>
      <button
        onClick={onRetry}
        className="bg-lime-500 h-2/4 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition"
      >
        Qaytadan
      </button>
    </div>
  );
};

export default Notification;
