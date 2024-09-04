import React from "react";

const categories = [
  { name: "All", icon: "" },
  { name: "Pizza", icon: "🍕" },
  { name: "Soups", icon: "🍲" },
  { name: "Salads", icon: "🥗" },
  { name: "Hot dishes", icon: "🍲" },
  { name: "Cake", icon: "🍰" },
  { name: "Fast Foods", icon: "🍔" },
  { name: "Drinks", icon: "🍹" },
  { name: "Dessert", icon: "🍨" },
];

const CategoryFilter = () => {
  return (
    <div className="flex space-x-4 p-4 rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex items-center space-x-2 p-2 px-3  hover:bg-gray-200 rounded-lg focus:outline-none"
        >
          <span className="text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
      <button className="ml-auto flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg focus:outline-none">
        <span>More</span>
        <span>▼</span>
      </button>
      <button className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg focus:outline-none">
        <span>Sorted by</span>
        <span>▼</span>
      </button>
    </div>
  );
};

export default CategoryFilter;
