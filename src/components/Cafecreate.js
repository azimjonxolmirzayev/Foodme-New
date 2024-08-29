import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "./MapComponent";
import Footeradmin from "./Footeradmin";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Cafecreate() {
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(null);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const logoInputRef = useRef(null);
  const backgroundInputRef = useRef(null);

  const navclick = () => {
    navigate("/");
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBackground(URL.createObjectURL(file));
    }
  };

  const clearLogo = () => {
    setLogo(null);
    logoInputRef.current.value = null;
  };

  const clearBackground = () => {
    setBackground(null);
    backgroundInputRef.current.value = null;
  };

  const triggerLogoUpload = () => {
    logoInputRef.current.click();
  };

  const triggerBackgroundUpload = () => {
    backgroundInputRef.current.click();
  };

  const handleAddressSelect = (selectedAddress) => {
    setAddress(selectedAddress);
  };

  return (
    <div className="min-h-screen dark:bg-dark bg-grey p-8">
      <div className="max-w-4xl mx-auto text-black dark:text-white bg-white dark:bg-dark p-8 rounded-lg dark:shadow-none shadow-lg">
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

            {/* Logo upload section */}
            <div
              onClick={triggerLogoUpload}
              className={`relative border-dashed cursor-pointer rounded-md border-2 flex flex-col-reverse items-center justify-center gap-1 p-6 text-center ${
                logo
                  ? "border-none shadow-sm shadow-green"
                  : "border-grey dark:border-grey"
              }`}
              style={{
                backgroundImage: logo ? `url(${logo})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "cover",
                height: "130px",
              }}
            >
              {!logo && (
                <>
                  <p className="text-grey dark:text-silver">Logo image</p>
                  <IoMdCloudUpload />
                </>
              )}
              {logo && (
                <button
                  onClick={clearLogo}
                  className="absolute top-2 right-2 text-white hover:text-red"
                >
                  <MdDelete size={24} />
                </button>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
                ref={logoInputRef}
                required
              />
            </div>

            {/* Background upload section */}
            <div
              onClick={triggerBackgroundUpload}
              className={`relative border-dashed cursor-pointer  rounded-md border-2 flex flex-col-reverse items-center justify-center gap-1 p-6 text-center ${
                background
                  ? "border-none shadow-sm shadow-green"
                  : "border-grey dark:border-gray-500"
              }`}
              style={{
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "cover",
                height: "130px",
              }}
            >
              {!background && (
                <>
                  <p className="text-gray-500 dark:text-silver">
                    Background image
                  </p>
                  <IoMdCloudUpload />
                </>
              )}
              {background && (
                <button
                  onClick={clearBackground}
                  className="absolute top-2 right-2 text-white hover:text-red"
                >
                  <MdDelete size={24} />
                </button>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleBackgroundChange}
                className="hidden"
                ref={backgroundInputRef}
                required
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-gray-700 dark:text-silver ">Title</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark dark:border-gray-700"
                placeholder="Type here"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-gray-700 dark:text-silver">Phone</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3  border-b-2 border-black dark:border-white outline-none dark:bg-dark dark:border-gray-700"
                placeholder="Type here"
              />
            </div>

            <div className="col-span-2">
              <label className="text-gray-700 dark:text-silver">
                Description
              </label>
              <input
                required
                className="w-full mt-2 p-3  border-b-2 border-black dark:border-white outline-none dark:bg-dark dark:border-gray-700"
                placeholder="Type here"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <input
              required
              type="text"
              className="w-full p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark dark:border-gray-700"
              placeholder="Type here"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <MapComponent onAddressSelect={handleAddressSelect} />
          </div>

          <button
            type="submit"
            className="bg-green text-white mt-6 p-3 rounded-lg hover:bg-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cafecreate;
