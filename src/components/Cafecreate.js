import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/FoodMElogo.png";
import Footer from "./Footeradmin";
import Footeradmin from "./Footeradmin";

// import { IoMdCloudUpload } from "react-icons/io";

function Cafecreate() {
  const navigate = useNavigate();

  const navclick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen dark:bg-dark bg-grey p-8">
      <div className="max-w-4xl mx-auto text-black dark:text-white bg-white dark:bg-dark p-8 rounded-lg shadow-lg">
        <form>
          <button
            onClick={navclick}
            className="text-gray-600 dark:text-silver mb-6"
          >
            &larr; Back
          </button>
          <h1 className="text-2xl font-bold mb-6">Cafe Create</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <h2 className="text-lg font-semibold mb-4">General</h2>
            </div>

            <div
              type="image"
              className="border-dashed cursor-pointer border-2 border-grey dark:border-gray-500 p-6 text-center"
            >
              <p className="text-gray-500 dark:text-silver">Logo image</p>
              {/* <LiaCloudUploadAltSolid /> */}
            </div>

            <div className="border-dashed cursor-pointer border-2 border-grey dark:border-gray-500 p-6 text-center">
              <p className="text-gray-500 dark:text-silver">Background image</p>
            </div>

            <div className="md:col-span-1">
              <label className="text-gray-700 dark:text-silver ">Title</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3 border-b-2 border-black outline-none dark:bg-dark dark:border-gray-700"
                placeholder="Type here"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-gray-700 dark:text-silver">Phone</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3  border-b-2 border-black outline-none dark:bg-dark dark:border-gray-700"
                placeholder="Type here"
              />
            </div>

            <div className="col-span-2">
              <label className="text-gray-700 dark:text-silver">
                Description
              </label>
              <input
                required
                className="w-full mt-2 p-3  border-b-2 border-black outline-none dark:bg-dark dark:border-gray-700"
                placeholder="Type here"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <input
              required
              type="text"
              className="w-full mt-2 p-3  border-b-2 border-black outline-none dark:bg-dark dark:border-gray-700"
              placeholder="Type here"
            />
          </div>

          <div className="mt-8">
            <div className="h-64 bg-grey dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-500 dark:text-silver">Map Placeholder</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-green text-black dark:text-dark py-3 px-8 rounded-lg shadow-lg hover:bg-green200 dark:hover:bg-green"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footeradmin />

      {/* <footer className="bg-black text-white rounded-md dark:bg-dark dark:text-silver mt-12 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <img className="w-32" src={logo} />
            <div className="space-x-4">
              <a href="/" className="hover:underline">
                About Foodme
              </a>
              <a href="#" className="hover:underline">
                Careers
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </div>
          </div>
          <p className="mt-4">457856 Andijon street. Namangan, 369495 UZ</p>
          <p className="mt-2">+998 (94) 000-0000, (91) 000-2255</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Cafecreate;
