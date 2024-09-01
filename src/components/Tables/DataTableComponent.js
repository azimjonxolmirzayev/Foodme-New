import React, { useState, useMemo } from "react";
import { useTable, usePagination, useSortBy, useRowSelect } from "react-table";
import { FaEye, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import product from "../../assets/product/product-01.jpg";
import { useNavigate } from "react-router-dom";

import Modal from "./Modal";

const DataTableComponent = ({ searchQuery, isGridView }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      product: "Borsh",
      category: "Pizza",
      image: product,
      size: "3",
      price: "20 000",
    },

    {
      product: "Margherita Pizza",
      category: "Pizza",
      image: product,
      size: "12",
      price: "15 000",
    },
    {
      product: "Pepperoni Pizza",
      category: "Pizza",
      image: product,
      size: "14",
      price: "18 000",
    },
    {
      product: "Veggie Burger",
      category: "Burger",
      image: product,
      size: "1",
      price: "12 000",
    },
    {
      product: "Cheeseburger",
      category: "Burger",
      image: product,
      size: "1",
      price: "14 000",
    },
    {
      product: "Caesar Salad",
      category: "Salad",
      image: product,
      size: "1",
      price: "10 000",
    },
    {
      product: "Greek Salad",
      category: "Salad",
      image: product,
      size: "1",
      price: "11 000",
    },
    {
      product: "Spaghetti Carbonara",
      category: "Pasta",
      image: product,
      size: "1",
      price: "17 000",
    },
    {
      product: "Lasagna",
      category: "Pasta",
      image: product,
      size: "1",
      price: "19 000",
    },
    {
      product: "Chicken Wings",
      category: "Appetizer",
      image: product,
      size: "8 pcs",
      price: "13 000",
    },
    {
      product: "Mozzarella Sticks",
      category: "Appetizer",
      image: product,
      size: "6 pcs",
      price: "12 000",
    },
    {
      product: "Beef Tacos",
      category: "Mexican",
      image: product,
      size: "3 pcs",
      price: "14 000",
    },
    {
      product: "Chicken Quesadilla",
      category: "Mexican",
      image: product,
      size: "1",
      price: "16 000",
    },
    {
      product: "Grilled Salmon",
      category: "Seafood",
      image: product,
      size: "1",
      price: "22 000",
    },
    {
      product: "Shrimp Scampi",
      category: "Seafood",
      image: product,
      size: "1",
      price: "20 000",
    },
    {
      product: "Chocolate Cake",
      category: "Dessert",
      image: product,
      size: "1",
      price: "8 000",
    },
  ]);

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((item) =>
      item.product.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openModal = (rowIndex) => {
    setSelectedRow(rowIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const handleDelete = () => {
    const updatedData = [...filteredData];
    updatedData.splice(selectedRow, 1);
    setData(updatedData);
    closeModal();
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Product",
        accessor: "product",
        Cell: ({ value, row }) => (
          <div className="flex items-center gap-3">
            <img
              src={row.original.image}
              className="w-7 rounded lg:w-15"
              alt="product"
            />
            {value}
          </div>
        ),
      },
      { Header: "Category", accessor: "category" },
      { Header: "Size", accessor: "size" },
      { Header: "Price", accessor: "price" },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                navigate("/admin/productdetail");
              }}
              className="w-7 h-7 rounded cursor-pointer dark:hover:bg-sky-400 dark:hover:text-white hover:bg-black hover:text-white flex items-center justify-center bg:white shadow dark:bg-boxdark"
            >
              <FaEye />
            </button>
            <button
              onClick={() => {
                navigate("/admin/editproduct");
              }}
              className="w-7 text-blue-400 h-7 rounded dark:hover:bg-sky-400 dark:hover:text-white hover:bg-sky-400 hover:text-white cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark"
            >
              <FaEdit />
            </button>
            <button
              className="w-7 h-7 rounded cursor-pointer text-rose-700 dark:hover:bg-rose-500 hover:bg-sky-400 hover:text-white flex items-center justify-center bg:white shadow dark:bg-boxdark"
              onClick={() => openModal(row.index)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination,
    useRowSelect
  );
  return (
    <div className="w-full border border-bordergray600 dark:border-sky-200 overflow-x-auto">
      <div className="px-4 md:px-8 pt-4 md:pt-8">
        {filteredData.length > 0 ? (
          <>
            {isGridView ? (
              <div className="grid pb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredData.map((item, index) => (
                  <div key={item.id} className="border rounded p-4 shadow">
                    <img
                      src={item.image}
                      className="w-full h-32 object-cover rounded mb-4"
                      alt="product"
                    />
                    <h3 className="text-lg font-semibold">{item.product}</h3>
                    <p className="text-sm">{item.category}</p>
                    <p className="text-sm">{item.size}</p>
                    <p className="text-sm font-bold">{item.price}</p>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => {
                          navigate("/admin/productdetail");
                        }}
                        className="text-blue-400 dark:hover:text-white hover:text-blue-600"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => {
                          navigate("/admin/editproduct");
                        }}
                        className="text-blue-400 dark:hover:text-white hover:text-blue-600"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-rose-700 dark:hover:text-red-600 hover:text-rose-600"
                        onClick={() => openModal(index)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table {...getTableProps()} className="w-full min-w-full">
                    <thead className="dark:bg-black">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              className="p-2 text-xs md:text-sm"
                            >
                              <span className="flex items-center">
                                {column.render("Header")}
                                <svg
                                  className="w-3 h-3 md:w-4 md:h-4 ms-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                  />
                                </svg>
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr
                            {...row.getRowProps()}
                            className="border-bordergray600 dark:border-sky-200 border-t border-b text-xs md:text-sm"
                          >
                            {row.cells.map((cell) => (
                              <td {...cell.getCellProps()} className="p-2 py-3">
                                {cell.render("Cell")}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="pagination gap-3 mt-5 mb-5 flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex gap-3 items-center">
                    <button
                      className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark"
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      {"<<"}
                    </button>
                    <button
                      className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark"
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      {"<"}
                    </button>
                    <button
                      className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark"
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                    >
                      {">"}
                    </button>
                    <button
                      className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark"
                      onClick={() => gotoPage(pageOptions.length - 1)}
                      disabled={!canNextPage}
                    >
                      {">>"}
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center">
                    <span>
                      Page{" "}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>
                    </span>
                    <select
                      className="w-24 h-8 md:w-32 md:h-10 text-[13px] lg:t-[15px] rounded cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark ml-2"
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                      {[10, 20, 30, 40, 50].map((size) => (
                        <option key={size} value={size}>
                          Show {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500 pb-8 dark:text-gray-300">
            No matching records found
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onConfirm={handleDelete}
          animation="slide-in"
          confirmButtonLabel="Yes"
          cancelButtonLabel="Cancel"
          confirmMessage="Deleted! Your file has been deleted."
          closeButtonLabel="OK"
        />
      )}
    </div>
  );
};

export default DataTableComponent;
