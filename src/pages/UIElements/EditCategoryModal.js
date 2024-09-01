import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

const EditCategoryModal = ({ isOpen, onClose, onSave, category }) => {
  const [name, setName] = useState(category?.name || "");
  const [status, setStatus] = useState(category?.status || "Active");
  const [isActive, setIsActive] = useState(status === "Active");

  const handleSave = () => {
    onSave({ ...category, name, status: isActive ? "Active" : "Inactive" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-boxdark  rounded-lg shadow-lg w-80 md:w-96">
        <div className="flex items-center  p-5 justify-between mb-4 border-b w-full">
          <h2 className="text-lg font-bold">Edit Category</h2>
          <button onClick={onClose} className="text-boxdark dark:text-white">
            <IoClose size={24} />
          </button>
        </div>
        <div className="mb-4 px-5">
          <label className="block text-sm font-medium mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-sk rounded-md bg-transparent outline-none"
          />
        </div>
        <div className="mb-4 flex  justify-between px-5 items-center">
          <label className="block text-sm font-medium mr-2">Status:</label>

          <div className="flex items-center">
            <span
              className={`text-sm font-medium ${
                isActive ? "text-blue-500" : "text-rose-500"
              }`}
            >
              {isActive ? "Active" : "Inactive"}
            </span>
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
              className="ml-2 mt-1"
            />
          </div>
        </div>
        <div className="flex pb-5 px-5 justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md dark:bg-gray-600 dark:text-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

EditCategoryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  category: PropTypes.object,
};

export default EditCategoryModal;
