import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Notification from "../UIElements/Notification";
import logo from "../../assets/logo/logo-01.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { BASE_URL } from "../../config/config";

function Login() {
  const [otp_code, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isOtpError, setIsOtpError] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const loginEndpoint = "login/";
  const fullUrl = `${BASE_URL}${loginEndpoint}`;

  useEffect(() => {
    if (otp_code.length === 6) {
      handleLogin();
    }
  }, [otp_code]);

  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = otp_code.split("");
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").slice(0, 6);

    if (pastedData.length === 6) {
      setOtp(pastedData);
      pastedData.split("").forEach((char, index) => {
        inputRefs.current[index].value = char;
      });
      inputRefs.current[5].focus();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${fullUrl}`,
        { otp_code: otp_code },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        Cookies.set("user_data", JSON.stringify(response.data.user), {
          expires: 7,
        });
        Cookies.set("access", JSON.stringify(response.data.access), {
          expires: 7,
        });
        Cookies.set("refresh", JSON.stringify(response.data.refresh), {
          expires: 7,
        });

        setMessage("Login muvaffaqiyatli amalga oshirildi!");
        setNotificationMessage("");
        setShowNotification(false);
        setIsOtpError(false);
        console.log(response.data);
        console.log(response.data);
        console.log(response.data.user["has_cafe"]);
        console.log(response.status);

        let has_cafe = response.data.user["has_cafe"];

        if (has_cafe == true) {
          navigate("/admin");
        } else {
          navigate("/create-cafe");
        }
      } else {
        console.log(response.data);
        console.log(response.status);

        setOtp("");
        setNotificationMessage("Login muvaffaqiyatsiz, kodni tekshiring.");
        setShowNotification(true);
        setIsOtpError(true);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setOtp("");
      setNotificationMessage(
        error.response
          ? `Xatolik yuz berdi: ${error.response.data.detail}`
          : "Serverdan javob olinmadi."
      );
      setShowNotification(true);
      setIsOtpError(true);
    }
  };

  useEffect(() => {
    if (isOtpError) {
      inputRefs.current.forEach((input) => {
        input.classList.remove("shake");
        void input.offsetWidth;
        input.classList.add("shake");
      });
    }
  }, [isOtpError]);

  const handleRetry = () => {
    setShowNotification(false);
    setOtp("");
    setIsOtpError(false);
    inputRefs.current[0].focus();
  };

  const handleDismiss = () => {
    setShowNotification(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black bg-white p-4 md:p-8 lg:p-16">
      <div className="flex items-center justify-center mb-8">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          <img src={logo} className="w-32 md:w-48 lg:w-60" alt="FoodME Logo" />
        </div>
      </div>
      <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold text-center mb-4">
        Kodni Kiriting
      </h1>
      <p className="text-sm md:text-base  text-black lg:text-lg text-center mb-8">
        <a
          href="tg://resolve?domain=foodme_robot"
          className="text-green leading-6"
        >
          foodme_robot
        </a>{" "}
        telegram botiga kiring va 1 daqiqalik <br /> kodingizni oling.
      </p>
      <div className="flex space-x-2 md:space-x-4 mb-4">
        {[...Array(6)].map((_, index) => (
          <input
            aria-label={`OTP input ${index + 1}`}
            key={index}
            type="text"
            maxLength="1"
            value={otp_code[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el)}
            className={`w-8 h-8 md:w-12 md:h-12 text-center text-black dark:text-black text-lg md:text-xl border-2 rounded-lg focus:outline-none ${
              isOtpError
                ? "border-red focus:border-red shake"
                : "border-grey focus:border-green"
            }`}
          />
        ))}
      </div>

      {showNotification && (
        <Notification
          message={notificationMessage}
          onRetry={handleRetry}
          onDismiss={handleDismiss}
        />
      )}
    </div>
  );
}

export default Login;
