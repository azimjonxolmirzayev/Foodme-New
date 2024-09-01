import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "../../components/Maps/MapComponent";
import Footeradmin from "../../components/Footer/Footeradmin";
import { IoMdCloudUpload } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
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

  const navigateTo = () => {
    navigate("/admin/dashboard");
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
    <div className="min-h-screen dark:bg-dark bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto text-black dark:text-white bg-white dark:bg-dark p-4 md:p-8 rounded-lg dark:shadow-none shadow-lg">
        <form>
          <button
            onClick={navclick}
            type="button"
            className="text-gray-600 flex items-center justify-center gap-3 dark:text-silver mb-6"
          >
            <IoArrowBackCircleOutline size="25px" />
            <p>Back</p>
          </button>
          <h1 className="text-2xl font-bold mb-6">Cafe Create</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4">General</h2>
            </div>

            <div
              onClick={triggerLogoUpload}
              className={`relative border-dashed cursor-pointer rounded-md border-2 flex flex-col-reverse items-center justify-center gap-1 p-6 text-center ${
                logo
                  ? "border-none shadow-sm shadow-green"
                  : "border-gray-300 dark:border-grey"
              }`}
              style={{
                backgroundImage: logo ? `url(${logo})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "130px",
              }}
            >
              {!logo && (
                <>
                  <p className="text-gray-500 dark:text-silver">Logo image</p>
                  <IoMdCloudUpload />
                </>
              )}
              {logo && (
                <button
                  onClick={clearLogo}
                  type="button"
                  className="absolute top-2 right-2 text-white hover:text-red-500"
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

            <div
              onClick={triggerBackgroundUpload}
              className={`relative border-dashed cursor-pointer rounded-md border-2 flex flex-col-reverse items-center justify-center gap-1 p-6 text-center ${
                background
                  ? "border-none shadow-sm shadow-green"
                  : "border-gray-300 dark:border-grey"
              }`}
              style={{
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                  type="button"
                  className="absolute top-2 right-2 text-white hover:text-red-500"
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

            <div>
              <label className="text-gray-700 dark:text-silver ">Title</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark"
                placeholder="Type here"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-silver">Phone</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark"
                placeholder="Type here"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="text-gray-700 dark:text-silver">
                Description
              </label>
              <input
                required
                className="w-full mt-2 p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark"
                placeholder="Type here"
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <input
              required
              type="text"
              className="w-full p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark"
              placeholder="Type here"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <MapComponent onAddressSelect={handleAddressSelect} />
          </div>

          <button
            type="submit"
            onClick={navigateTo}
            className="bg-green text-white mt-6 p-3 px-5 font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cafecreate;
