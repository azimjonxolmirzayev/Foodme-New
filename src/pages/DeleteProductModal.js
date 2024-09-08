import React from "react";

const DeleteProductModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-black  rounded-lg shadow-lg w-80 p-4">
        <h2 className="text-lg font-semibold mb-4">Delete Product</h2>
        <p className="mb-4">Are you sure you want to delete this product?</p>
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red text-white  rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
