import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapComponent from "../../components/Maps/MapComponent";
import { IoMdCloudUpload } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import { BASE_URL } from "../../config/config";

function Cafecreate() {
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logoInputRef = useRef(null);
  const backgroundInputRef = useRef(null);

  const navclick = () => {
    navigate("/");
  };

  const navigateToDashboard = () => {
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

  const loginEndpoint = "cafes/";
  const fullUrl = `${BASE_URL}${loginEndpoint}`;

  const user_data = JSON.parse(Cookies.get("user_data"));
  const csrfToken = JSON.parse(Cookies.get("access"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", address);
    formData.append("description", description);
    formData.append("phone_number", phoneNumber);
    formData.append("owner", user_data["id"]);
    if (logoInputRef.current?.files[0]) {
      formData.append("logo", logoInputRef.current.files[0]);
    }

    if (backgroundInputRef.current?.files[0]) {
      formData.append("bg_image", backgroundInputRef.current.files[0]);
    }

    try {
      const response = await axios.post(fullUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": csrfToken,
          Authorization: `Bearer ${csrfToken}`,
        },
        withCredentials: true,
      });
      Cookies.set("cafe_data", JSON.stringify(response.data), {
        expires: 7,
      });
      setLoading(false);
      navigateToDashboard();
    } catch (error) {
      // console.log("Status", error.response.status);
      console.error(
        "Error creating cafe",
        error.response ? error.response.data : error.message
      );
      setLoading(false);
      setError("There was an issue creating the cafe. Please try again.");
    }
  };
  const user_ = Cookies.get("user_data");

  const data = [];

  if (user_) {
    data.push(JSON.parse(user_));
  }

  const defaultNumber = data.length > 0 && data[0]["phone_number"];

  useEffect(() => {
    setPhoneNumber(defaultNumber);
  }, []);

  return (
    <div className="min-h-screen dark:bg-dark bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto text-black dark:text-white bg-white dark:bg-dark p-4 md:p-8 rounded-lg dark:shadow-none shadow-lg">
        <form onSubmit={handleSubmit}>
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
                name={logo}
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
                name={background}
                required
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-silver">Name</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark"
                placeholder="Type here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-silver">Phone</label>
              <input
                required
                type="text"
                className="w-full mt-2 p-3 border-b-2 border-black dark:border-white outline-none dark:bg-dark"
                placeholder="Type here"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <button
            type="submit"
            className="bg-green text-white px-6 py-3 mt-8 w-full rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Cafe"} {/* Loading text */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cafecreate;
