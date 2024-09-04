import React from "react";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="rounded-md w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">${price}</span>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
