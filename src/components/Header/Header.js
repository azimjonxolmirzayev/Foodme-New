import Button from "../../pages/UIElements/Button";
import DayImage from "../../assets/header/header-01.jpg";
import NightImage from "../../assets/header/header-02.png";
import { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const navclick = () => {
    const userData = Cookies.get("user_data");

    if (userData) {
      const data = JSON.parse(userData);
      const bool = data["has_cafe"];

      if (bool === true) {
        navigate("/admin");
      } else {
        navigate("/create-cafe");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      ref={headerRef}
      className={`max-w-screen-xl dark:text-white font-['SpaceGrotesk'] flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center mx-auto p-4 mt-24 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 leading-tight">
          {t("headermain")}
        </h1>
        <p className="mb-6 md:mb-8 text-sm md:text-base">
          {t("headersubtext")}
        </p>
        <Button text={t("createmenu")} onClick={navclick} />
        <Button text={t("menuexample")} />
      </div>
      <div className="flex-shrink-0">
        <img
          className="w-full h-0 md:h-auto lg max-w-xs md:max-w-sm lg:max-w-md"
          src={isDarkMode ? NightImage : DayImage}
          alt="Header Image"
        />
      </div>
    </div>
  );
}

export default Header;
