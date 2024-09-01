import React, { useState, useMemo } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { FaEye, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import EditCategoryModal from "../../pages/UIElements/EditCategoryModal";
import Modal from "./Modal";

const DataTableComponentCategory = ({ searchQuery }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: 1,
      name: "Pizza",
      createdOn: "2024-09-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Burger",
      createdOn: "2024-08-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Salad",
      createdOn: "2024-07-15",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Pasta",
      createdOn: "2024-06-30",
      status: "Active",
    },
    {
      id: 5,
      name: "Appetizer",
      createdOn: "2024-05-10",
      status: "Inactive",
    },
    // Add more categories as needed
  ]);

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCategory(null);
  };

  const handleSaveCategory = (updatedCategory) => {
    const updatedData = data.map((cat) =>
      cat.id === updatedCategory.id ? updatedCategory : cat
    );
    setData(updatedData);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openDeleteModal = (rowIndex) => {
    setSelectedRow(rowIndex);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleDelete = () => {
    const updatedData = [...filteredData];
    updatedData.splice(selectedRow, 1);
    setData(updatedData);
    closeDeleteModal();
  };

  const columns = React.useMemo(
    () => [
      { Header: "Category Name", accessor: "name" },
      { Header: "Created On", accessor: "createdOn" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={`text-sm font-medium ${
              value === "Active" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex gap-2 items-center">
            <button
              onClick={() => openEditModal(row.original)}
              className="w-7 text-blue-400 h-7 rounded dark:hover:bg-sky-400 dark:hover:text-white hover:bg-sky-400 hover:text-white cursor-pointer flex items-center justify-center bg:white shadow dark:bg-boxdark"
            >
              <FaEdit />
            </button>
            <button
              className="w-7 h-7 rounded cursor-pointer text-rose-700 dark:hover:bg-rose-500 hover:bg-sky-400 hover:text-white flex items-center justify-center bg:white shadow dark:bg-boxdark"
              onClick={() => openDeleteModal(row.index)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ),
      },
    ],
    [navigate, filteredData]
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
    usePagination
  );

  return (
    <div className="w-full border border-bordergray600 dark:border-sky-200 overflow-x-auto">
      <div className="px-4 md:px-8 pt-4 md:pt-8">
        {filteredData.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table {...getTableProps()} className="min-w-full">
                <thead className="dark:bg-black">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className="p-2 text-xs md:text-sm whitespace-nowrap"
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
                          <td
                            {...cell.getCellProps()}
                            className="p-2 py-3 whitespace-nowrap"
                          >
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
                  className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg-white shadow dark:bg-boxdark"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg-white shadow dark:bg-boxdark"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </button>
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg-white shadow dark:bg-boxdark"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {">"}
                </button>
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded cursor-pointer flex items-center justify-center bg-white shadow dark:bg-boxdark"
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
                  className="w-24 h-8 md:w-32 md:h-10 text-[13px] lg:text-[15px] rounded cursor-pointer flex items-center justify-center bg-white shadow dark:bg-boxdark ml-2"
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
        ) : (
          <div className="text-center text-gray-500 pb-8 dark:text-gray-300">
            No matching records found
          </div>
        )}
      </div>
      {isEditModalOpen && (
        <EditCategoryModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onSave={handleSaveCategory}
          category={selectedCategory}
        />
      )}
      {isDeleteModalOpen && (
        <Modal
          onClose={closeDeleteModal}
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

export default DataTableComponentCategory;
