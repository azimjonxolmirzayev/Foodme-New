import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClickOutside from "../ClickOutside";
import UserOne from "../../assets/user/user-01.jpg";
import Cookies from "js-cookie";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const user_data = JSON.parse(Cookies.get("user_data"));

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={toggleDropdown}
        className="flex items-center gap-4"
        to="#"
        aria-expanded={dropdownOpen}
        aria-controls="user-dropdown"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {user_data["full_name"]}
          </span>
        </span>

        <span className="h-12 w-12 overflow-hidden rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
          />
        </svg>
      </Link>

      {dropdownOpen && (
        <div
          id="user-dropdown"
          className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.50623 4.46874 3.50623 4.91562C3.50623 5.36249 3.84998 5.70624 4.29685 5.70624H5.25935V10.2781H4.29685C3.88435 10.2781 3.50623 10.6219 3.50623 11.0687C3.50623 11.4812 3.84998 11.8594 4.29685 11.8594H5.25935V16.4312H4.29685C3.88435 16.4312 3.50623 16.775 3.50623 17.2219C3.50623 17.6687 3.84998 18.0125 4.29685 18.0125H5.25935V19.25C5.25935 20.4187 6.22185 21.4156 7.42498 21.4156H15.675C17.2218 21.4156 18.4937 20.1437 18.5281 18.5969V3.47187C18.4937 2.68124 18.2187 1.95937 17.6687 1.44374ZM16.9469 18.5625C16.9469 19.2844 16.3625 19.8344 15.6406 19.8344H7.3906C7.04685 19.8344 6.77185 19.5594 6.77185 19.2156V17.875H8.6281C9.0406 17.875 9.41873 17.5312 9.41873 17.0844C9.41873 16.6375 9.07498 16.2937 8.6281 16.2937H6.77185V11.7906H8.6281C9.0406 11.7906 9.41873 11.4469 9.41873 11.0687C9.41873 10.6219 9.07498 10.2781 8.6281 10.2781H6.77185V5.70624H8.6281C9.0406 5.70624 9.41873 5.36249 9.41873 4.91562C9.41873 4.46874 9.07498 4.12499 8.6281 4.12499H6.77185V2.87187C6.77185 2.83749 6.77185 2.80312 6.77185 2.76874C6.77185 2.21874 7.43335 1.70624 7.94248 1.70624H15.675C16.1925 1.70624 16.8969 2.21374 16.9469 2.71062V18.5625Z" />
                </svg>
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.375 12.6612C20.2875 12.4999 20.1487 12.3712 20.0099 12.2425L14.4512 6.72124C14.4175 6.68124 14.3637 6.64999 14.3099 6.61874C13.9337 6.46062 13.5962 6.31124 13.2862 6.18624C12.96 6.07124 12.65 5.96562 12.35 5.96562C12.0999 5.96562 11.85 6.07124 11.5375 6.18624C11.2249 6.31124 10.9112 6.46062 10.5425 6.61874C10.5075 6.64999 10.4649 6.68124 10.4306 6.72124L4.93623 12.2425C4.81435 12.3712 4.67562 12.4999 4.59062 12.6612C4.2281 13.6187 4.7406 14.7687 5.5281 15.5562C6.0481 16.0775 6.66185 16.5556 7.3562 16.9125C8.11685 17.3062 8.91185 17.4737 9.74248 17.4737C10.555 17.4737 11.3399 17.3062 12.0737 16.9125C12.6019 16.6556 13.0375 16.3044 13.3987 15.9062L16.8737 19.6237C17.5062 20.2562 18.3699 20.4625 19.2137 20.2562C19.5999 20.2137 19.9487 20.0425 20.2562 19.7125C20.5099 19.4275 20.675 19.0281 20.7425 18.6212C20.9249 17.2275 20.4187 15.9775 19.2137 14.8812L16.9487 12.1425L20.375 12.6612Z" />
                </svg>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
