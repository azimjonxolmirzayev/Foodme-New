import React, { useState, useRef, useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiGrid32 } from "react-icons/ci";

const SearchFormCategory = ({ onSearch, onToggleView }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
    if (showFilters) {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.style.height = showFilters
        ? `${filterRef.current.scrollHeight}px`
        : "0px";
    }
  }, [showFilters]);

  return (
    <div className="mt-5 w-full">
      <div className="flex flex-col">
        <div className="border border-b-0 rounded-t-md border-bordergray600 bg-transparent p-6 dark:bg-boxdark dark:border-sky-200">
          <form>
            <div className="relative w-full flex items-center justify-between rounded-md">
              <IoIosSearch
                className="absolute left-2 block h-5 w-5 text-gray-400"
                size={"22px"}
              />
              <input
                type="text"
                name="search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="h-10 w-45 lg:w-67 cursor-text rounded-md border border-bordergray600 text-grey bg-transparent py-4 pl-9 shadow-sm outline-none"
                placeholder="Search..."
              />
              <div className="flex items-center gap-5">
                <div
                  className="w-10 h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow bg-sky-400"
                  onClick={toggleFilters}
                >
                  {showFilters ? (
                    <IoClose size={"22px"} className="text-white" />
                  ) : (
                    <CiFilter size={"22px"} className="text-white" />
                  )}
                </div>
              </div>
            </div>

            <div
              ref={filterRef}
              className={`overflow-hidden relative top-4 transition-all duration-300 ease-in-out`}
              style={{
                height: showFilters
                  ? `${filterRef.current?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-stone-600  dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="mt-2 block w-full rounded-md border bg-transparent border-bordergray600 px-2 py-2 shadow-sm outline-none "
                  >
                    <option disabled>Select category</option>

                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="priceRange"
                    className="text-sm font-medium text-stone-600  dark:text-white"
                  >
                    Date
                  </label>
                  <div className="flex gap-4 mt-2">
                    <input
                      type="date"
                      id="minPrice"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      placeholder="Min Price"
                      className="block w-full rounded-md border border-gray-100 bg-transparent px-2 py-2 shadow-sm outline-none "
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="status"
                    className="text-sm font-medium text-stone-600  dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-transparent px-2 py-2 shadow-sm "
                  >
                    <option disabled>Select status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFormCategory;
