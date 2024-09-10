// // AddCategoryModal.js
// import React, { useState } from "react";

// const AddCategoryModal = ({ isOpen, onClose, onSave }) => {
//   const [categoryName, setCategoryName] = useState("");
//   const [status, setStatus] = useState(false);

//   const [isActive, setIsActive] = useState(status === "Active");

//   const handleSave = () => {
//     if (categoryName) {
//       onSave({ name: categoryName, status: status ? "Active" : "Inactive" });
//       setCategoryName("");
//       setStatus(false);
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg w-80 md:w-96">
//         <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
//           <h2 className="text-lg font-semibold">Add Category</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
//           >
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div className="p-4">
//           <div className="mb-4">
//             <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
//               Category Name
//             </label>
//             <input
//               type="text"
//               value={categoryName}
//               onChange={(e) => setCategoryName(e.target.value)}
//               className="w-full p-2 border border-sk rounded-md bg-transparent outline-none"
//               placeholder="Enter category name"
//             />
//           </div>

//           <div className="flex justify-between">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md dark:bg-gray-600 dark:text-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSave}
//               className="px-4 py-2 bg-blue-500 text-white rounded-md"
//             >
//               Add Category
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCategoryModal;

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../../config/config"; // Update this path as needed

const AddCategoryModal = ({ isOpen, onClose, onSave }) => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);

  const token = JSON.parse(Cookies.get("access"));
  const cafe_data = JSON.parse(Cookies.get("cafe_data"));

  const handleSave = async () => {
    if (categoryName) {
      try {
        // Prepare the request data
        const requestData = {
          category_name: categoryName,
          cafe: {
            owner: cafe_data[0]["owner"],
            name: cafe_data[0]["name"],
            slug: cafe_data[0]["slug"],
            location: cafe_data[0]["location"],
            description: cafe_data[0]["description"],
            phone_number: cafe_data[0]["phone_number"],
          },
          cafe_id: parseInt(cafe_data[0]["id"], 10), // Ensure it's an integer
        };

        // Send POST request to add the category
        await axios.post(`${BASE_URL}category/`, requestData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        onClose();
      } catch (error) {
        setError("Failed to add category. Please try again.");
        console.error(
          "Error adding category:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-boxdark rounded-lg shadow-lg w-80 md:w-96">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Add Category</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label className="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              Category Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-2 border border-sk rounded-md bg-transparent outline-none"
              placeholder="Enter category name"
            />
          </div>

          <div className="flex justify-between">
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
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
