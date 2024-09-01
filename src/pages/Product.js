import React, { useState } from "react";
import { IoRefresh } from "react-icons/io5";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import SearchForm from "../components/SearchForm";
import { useNavigate } from "react-router-dom";
import { CiGrid32 } from "react-icons/ci";

import DataTableComponent from "../components/Tables/DataTableComponent";

function Product() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(false);

  const handleSearch = (query) => setSearchQuery(query);
  const toggleView = () => setIsGridView((prev) => !prev);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-5 items-center dark:text-white justify-between">
        <div className="text-center sm:text-left">
          <h1 className="font-semibold text-[18px] sm:text-[20px]">
            Product List
          </h1>
          <h3 className="text-[12px] sm:text-[14px]">Manage your products</h3>
        </div>
        <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-0">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark">
            <IoRefresh size={"20px"} />
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark">
            <FaAngleUp size={"20px"} />
          </button>
          <button
            onClick={() => navigate("/admin/createproduct")}
            className="w-36 sm:w-45 h-10  sm gap-2 sm:gap-3 rounded-md cursor-pointer flex items-center justify-center font-semibold bg-sky-400 text-white dark:bg-sky-700"
          >
            <IoIosAddCircleOutline size={"20px"} />
            <span className="text-sm sm:text-base">Add New Product</span>
          </button>
        </div>
      </div>
      <SearchForm onSearch={handleSearch} onToggleView={toggleView} />
      <DataTableComponent searchQuery={searchQuery} isGridView={isGridView} />
    </>
  );
}

export default Product;
