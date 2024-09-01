import React, { useState } from "react";
import userThree from "../assets/logo/logo-01.png";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
function CreateProduct() {
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
            New Product
          </h1>
          <h3 className="text-[12px] sm:text-[14px]">Create new product</h3>
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
                        <AiOutlineProduct
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
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                                fill="#637381"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                                fill="#637381"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                                fill="#637381"
                              ></path>
                            </g>
                          </svg>
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
                    <span className="absolute left-0 top-0">
                      <FiEdit
                        size={"20px"}
                        className="absolute left-4.5 top-4"
                      />
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
                  Save Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
