import React, { useState } from "react";
import userThree from "../assets/logo/logo-01.png";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

function EditProduct() {
  const [selectedOption, setSelectedOption] = useState("");

  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };
  const [formData, setFormData] = useState({
    productName: "",
    phoneNumber: "",
    size: "",
    price: "",
    description: "",
    coverImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-5 mb-5 sm:gap-5 items-center dark:text-white justify-between">
        <div className="text-center sm:text-left">
          <h1 className="font-semibold text-[18px] sm:text-[20px]">
            Edit Product
          </h1>
        </div>
        <div className="flex gap-3 sm:gap-5 mt-3 sm:mt-0">
          <button
            onClick={() => navigate("/admin/product")}
            className="w-36 sm:w-45 h-10 gap-2 sm:gap-3 rounded-md cursor-pointer flex items-center justify-center font-semibold bg-sky-400 text-white dark:bg-sky-700"
          >
            <IoIosArrowRoundBack size={"20px"} />
            <span className="text-sm sm:text-base">Back to Product</span>
          </button>
        </div>
      </div>

      <div className=" gap-8 w-full ">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black flex items-center gap-3 dark:text-white">
                <IoInformationCircleOutline />
                Product Information
              </h3>
            </div>
            <div className="p-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="productName"
                    >
                      Product Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <MdOutlineDriveFileRenameOutline
                          className="fill-current"
                          size={"22px"}
                        />
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="productName"
                        id="productName"
                        placeholder="Product Name"
                        value={formData.productName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Select Category
                      </label>

                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                          <AiOutlineProduct size={"22px"} />
                        </span>

                        <select
                          value={selectedOption}
                          onChange={(e) => {
                            setSelectedOption(e.target.value);
                            changeTextColor();
                          }}
                          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition  active:border-primary
                             bg-gray pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary ${
                               isOptionSelected
                                 ? "text-black dark:text-white"
                                 : ""
                             }`}
                        >
                          <option
                            value="Pizza"
                            className="text-body dark:text-bodydark"
                          >
                            Pizza
                          </option>
                          <option
                            value="Drinks"
                            className="text-body dark:text-bodydark"
                          >
                            Drinks
                          </option>
                          <option
                            value="Desert"
                            className="text-body dark:text-bodydark"
                          >
                            Desert
                          </option>
                        </select>

                        <span className="absolute top-1/2 right-4 z-99999 -translate-y-1/2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill="#637381"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="size"
                    >
                      Size
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <LiaPuzzlePieceSolid
                          className="fill-current"
                          size={"22px"}
                        />
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="number"
                        name="size"
                        id="size"
                        placeholder="Size"
                        value={formData.size}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4">
                      <FiEdit size={"20px"} />
                    </span>
                    <textarea
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      name="description"
                      id="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="coverImage"
                  >
                    Product Image
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="file"
                    name="coverImage"
                    id="coverImage"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className=" p-5 rounded bg-primary py-3 text-white hover:bg-primary-dark focus:outline-none"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
