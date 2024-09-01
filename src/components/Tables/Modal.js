import React, { useState } from "react";
import { CSSTransition } from "react-transition-group"; // For animations

const Modal = ({
  onClose,
  onConfirm,
  animation,
  confirmButtonLabel,
  cancelButtonLabel,
  confirmMessage,
  closeButtonLabel,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(true);
    onConfirm();
  };

  return (
    <CSSTransition in={true} timeout={300} classNames={animation} unmountOnExit>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="bg-white dark:bg-boxdark text-center px-15 py-5 rounded shadow-lg">
          {!isConfirmed ? (
            <>
              <h1 className="text-[21px] mb-3">Are you sure?</h1>
              <h3 className="text-[15px] mb-3">
                Are you sure you want to delete this item?
              </h3>
              <div className="flex justify-end gap-5 items-center">
                <button
                  onClick={onClose}
                  className="py-5 px-15 text-[14px] font-semibold dark:text-white text-black sm:w-10 sm:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-red dark:hover:shadow-2 dark:hover:shadow-rose-700"
                >
                  {cancelButtonLabel}
                </button>
                <button
                  onClick={handleConfirm}
                  className="py-5 px-15 text-[14px] font-semibold dark:text-white text-black sm:w-10 sm:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-sky-500 dark:hover:shadow-2 dark:hover:shadow-sky-700"
                >
                  {confirmButtonLabel}
                </button>
              </div>
            </>
          ) : (
            <>
              <h3>{confirmMessage}</h3>
              <div className="flex justify-end mt-4">
                <button
                  onClick={onClose}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  {closeButtonLabel}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
