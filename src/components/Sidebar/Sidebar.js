// import React, { useEffect, useRef, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { IoMdAdd } from "react-icons/io";
// import AddCategoryModal from "../../pages/UIElements/AddCategoryModal";
// import { BASE_URL } from "../../config/config";
// import Logo from "../../assets/logo/logo-01.png";
// import Cookies from "js-cookie";
// import axios from "axios";

// const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [cafe, setCafe] = useState(null);
//   const [error, setError] = useState(null);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [isGridView, setIsGridView] = useState(false);

//   const handleSearch = (query) => setSearchQuery(query);
//   const toggleView = () => setIsGridView((prev) => !prev);

//   const openAddModal = () => setIsAddModalOpen(true);
//   const closeAddModal = () => setIsAddModalOpen(false);

//   const token = JSON.parse(Cookies.get("access"));
//   const user_data = JSON.parse(Cookies.get("user_data"));
//   const user_id = user_data["id"];

//   const getEndpoint = "cafes/";
//   const fullUrl = `${BASE_URL}${getEndpoint}`;

//   try {
//     axios
//       .get(fullUrl, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const userCafes = response.data.filter(
//           (cafe) => cafe.owner === user_id
//         );
//         Cookies.set("cafe_data", JSON.stringify(userCafes), {
//           expires: 7,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching cafes:", error);
//       });
//   } catch (error) {}

//   const handleAddCategory = (newCategory) => {
//     const updatedCategories = [...categories, newCategory];
//     setCategories(updatedCategories);
//     localStorage.setItem("categories", JSON.stringify(updatedCategories));
//   };

//   const location = useLocation();
//   const { pathname } = location;
//   const navigate = useNavigate();

//   const trigger = useRef(null);
//   const sidebar = useRef(null);

//   const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
//   const [sidebarExpanded, setSidebarExpanded] = useState(
//     storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
//   );

//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!sidebar.current || !trigger.current) return;
//       if (
//         !sidebarOpen ||
//         sidebar.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener("click", clickHandler);
//     return () => document.removeEventListener("click", clickHandler);
//   }, [sidebarOpen]);

//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (!sidebarOpen || keyCode !== 27) return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener("keydown", keyHandler);
//     return () => document.removeEventListener("keydown", keyHandler);
//   }, [sidebarOpen]);

//   useEffect(() => {
//     localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
//     if (sidebarExpanded) {
//       document.querySelector("body")?.classList.add("sidebar-expanded");
//     } else {
//       document.querySelector("body")?.classList.remove("sidebar-expanded");
//     }
//   }, [sidebarExpanded]);

//   useEffect(() => {
//     // Load categories from localStorage when component mounts
//     const storedCategories = localStorage.getItem("categories");
//     if (storedCategories) {
//       setCategories(JSON.parse(storedCategories));
//     }
//   }, []);

//   return (
//     <>
//       <aside
//         ref={sidebar}
//         className={`absolute no-scrollbar left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white shadow-4  duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
//           <NavLink to="/">
//             <img src={Logo} alt="Logo" />
//           </NavLink>

//           <button
//             ref={trigger}
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             aria-controls="sidebar"
//             aria-expanded={sidebarOpen}
//             className="block lg:hidden"
//           >
//             <svg
//               className="fill-current"
//               width="20"
//               height="18"
//               viewBox="0 0 20 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
//                 fill=""
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
//           <nav className="py-4 px-4 lg:mt-9 lg:px-6">
//             <div>
//               <ul className="mb-6 flex flex-col gap-1.5">
//                 <li>
//                   <NavLink
//                     to="/admin/allproducts"
//                     className={`group relative flex items-center justify-between gap-2.5 rounded-sm py-2 px-4 font-medium dark:text-bodydark1 text-dark duration-300 ease-in-out  ${
//                       pathname.includes("/admin/allproducts") &&
//                       "bg-graydark dark:bg-meta-4"
//                     }`}
//                   >
//                     All Products
//                   </NavLink>
//                   <ul className="ml-4 mt-2">
//                     {categories.map((category, index) => (
//                       <li key={index}>
//                         <NavLink to={`/admin/category/${category.name}`}>
//                           <span className="text-bodydark1 text-[18px]">
//                             {category.name}
//                           </span>
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <ul className="mb-6 flex flex-col gap-1.5">
//                 <li>
//                   <NavLink
//                     to=""
//                     className={`group relative flex items-center gap-2.5 justify-between rounded-sm py-2 px-4 font-medium text-dark dark:text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 hover:text-white  ${
//                       pathname.includes("/admin/freetrial") &&
//                       "bg-graydark dark:bg-meta-4"
//                     }`}
//                   >
//                     Add Category
//                     <IoMdAdd onClick={openAddModal} size={"22px"} />
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </aside>
//       <AddCategoryModal
//         isOpen={isAddModalOpen}
//         onClose={closeAddModal}
//         onSave={handleAddCategory}
//       />
//     </>
//   );
// };

// export default Sidebar;

// import React, { useEffect, useRef, useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { IoMdAdd } from "react-icons/io";
// import AddCategoryModal from "../../pages/UIElements/AddCategoryModal";
// import { BASE_URL } from "../../config/config";
// import Logo from "../../assets/logo/logo-01.png";
// import Cookies from "js-cookie";
// import axios from "axios";

// const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState(null);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [isGridView, setIsGridView] = useState(false);

//   const handleSearch = (query) => setSearchQuery(query);
//   const toggleView = () => setIsGridView((prev) => !prev);

//   const openAddModal = () => setIsAddModalOpen(true);
//   const closeAddModal = () => setIsAddModalOpen(false);

//   const token = JSON.parse(Cookies.get("access"));
//   const user_data = JSON.parse(Cookies.get("user_data"));
//   const user_id = user_data["id"];

//   const getEndpoint = "cafes/";
//   const fullUrl = `${BASE_URL}${getEndpoint}`;

//   try {
//     axios
//       .get(fullUrl, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const userCafes = response.data.filter(
//           (cafe) => cafe.owner === user_id
//         );
//         Cookies.set("cafe_data", JSON.stringify(userCafes), {
//           expires: 7,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching cafes:", error);
//       });
//   } catch (error) {}

//   const handleAddCategory = (newCategory) => {
//     const updatedCategories = [...categories, newCategory];
//     // setCategories(updatedCategories);
//     localStorage.setItem("categories", JSON.stringify(updatedCategories));
//   };

//   const location = useLocation();
//   const { pathname } = location;
//   const navigate = useNavigate();

//   const trigger = useRef(null);
//   const sidebar = useRef(null);

//   const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
//   const [sidebarExpanded, setSidebarExpanded] = useState(
//     storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
//   );

//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!sidebar.current || !trigger.current) return;
//       if (
//         !sidebarOpen ||
//         sidebar.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener("click", clickHandler);
//     return () => document.removeEventListener("click", clickHandler);
//   }, [sidebarOpen]);

//   useEffect(() => {
//     const keyHandler = ({ keyCode }) => {
//       if (!sidebarOpen || keyCode !== 27) return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener("keydown", keyHandler);
//     return () => document.removeEventListener("keydown", keyHandler);
//   }, [sidebarOpen]);

//   useEffect(() => {
//     localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
//     if (sidebarExpanded) {
//       document.querySelector("body")?.classList.add("sidebar-expanded");
//     } else {
//       document.querySelector("body")?.classList.remove("sidebar-expanded");
//     }
//   }, [sidebarExpanded]);

//   useEffect(() => {
//     // Fetch categories from API when component mounts
//     const fetchCategories = async () => {
//       try {
//         const token = JSON.parse(Cookies.get("access")); // Ensure you're getting the correct token
//         const getEndpoint = "category/";
//         const fullUrl = `${BASE_URL}${getEndpoint}`;

//         axios
//           .get(fullUrl, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           })
//           .then((response) => {
//             const filteredCategories = response.data.filter(
//               (category) => category.cafe.owner === user_id
//             );
//             const categoryNames = filteredCategories.map(
//               (item) => item.category_name
//             );
//             setCategories(categoryNames);
//             console.log(categoryNames);
//           })
//           .catch((error) => {
//             console.error("Error fetching cafes:", error);
//           });
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setError("Failed to load categories.");
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <>
//       <aside
//         ref={sidebar}
//         className={`absolute no-scrollbar left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white shadow-4  duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
//           <NavLink to="/">
//             <img src={Logo} alt="Logo" />
//           </NavLink>

//           <button
//             ref={trigger}
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             aria-controls="sidebar"
//             aria-expanded={sidebarOpen}
//             className="block lg:hidden"
//           >
//             <svg
//               className="fill-current"
//               width="20"
//               height="18"
//               viewBox="0 0 20 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
//                 fill=""
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
//           <nav className="py-4 px-4 lg:mt-9 lg:px-6">
//             <div>
//               <ul className="mb-6 flex flex-col gap-1.5">
//                 <li>
//                   <NavLink
//                     to="/admin/allproducts"
//                     className={`group relative flex items-center justify-between gap-2.5 rounded-sm py-2 px-4 font-medium dark:text-bodydark1 text-dark duration-300 ease-in-out ${
//                       pathname.includes("/admin/allproducts") &&
//                       "bg-graydark dark:bg-meta-4"
//                     }`}
//                   >
//                     All Products
//                   </NavLink>
//                   <ul className="ml-4 mt-2">
//                     {categories.length > 0 ? (
//                       categories.map((category, index) => (
//                         <li key={index}>
//                           <NavLink to={`/admin/category/${category.name}`}>
//                             <span className="text-bodydark1 text-[18px]">
//                               {category.name}
//                             </span>
//                           </NavLink>
//                         </li>
//                       ))
//                     ) : (
//                       <li>No categories found</li>
//                     )}
//                   </ul>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <ul className="mb-6 flex flex-col gap-1.5">
//                 <li>
//                   <NavLink
//                     to=""
//                     className={`group relative flex items-center gap-2.5 justify-between rounded-sm py-2 px-4 font-medium text-dark dark:text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 hover:text-white  ${
//                       pathname.includes("/admin/freetrial") &&
//                       "bg-graydark dark:bg-meta-4"
//                     }`}
//                   >
//                     Add Category
//                     <IoMdAdd onClick={openAddModal} size={"22px"} />
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </aside>
//       <AddCategoryModal
//         isOpen={isAddModalOpen}
//         onClose={closeAddModal}
//         onSave={handleAddCategory}
//       />
//     </>
//   );
// };

// export default Sidebar;

import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import AddCategoryModal from "../../pages/UIElements/AddCategoryModal";
import { BASE_URL } from "../../config/config";
import Logo from "../../assets/logo/logo-01.png";
import Cookies from "js-cookie";
import axios from "axios";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(false);

  const handleSearch = (query) => setSearchQuery(query);
  const toggleView = () => setIsGridView((prev) => !prev);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const token = JSON.parse(Cookies.get("access") || "{}");
  const user_data = JSON.parse(Cookies.get("user_data") || "{}");
  const user_id = user_data["id"];

  const getEndpoint = "cafes/";
  const fullUrl = `${BASE_URL}${getEndpoint}`;

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await axios.get(fullUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userCafes = response.data.filter(
          (cafe) => cafe.owner === user_id
        );
        Cookies.set("cafe_data", JSON.stringify(userCafes), {
          expires: 7,
        });
      } catch (error) {
        console.error("Error fetching cafes:", error);
      }
    };

    fetchCafes();
  }, [fullUrl, token, user_id]);

  const handleAddCategory = (newCategory) => {
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    // Fetch categories from API when component mounts
    const fetchCategories = async () => {
      try {
        const getEndpoint = "category/";
        const fullUrl = `${BASE_URL}${getEndpoint}`;

        const response = await axios.get(fullUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const filteredCategories = response.data.filter(
          (category) => category.cafe.owner === user_id
        );
        const categoryNames = filteredCategories.map(
          (item) => item.category_name
        );
        setCategories(categoryNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      }
    };

    fetchCategories();
  }, [token, user_id]);

  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute no-scrollbar left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white shadow-4 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <NavLink
                    to="/admin/allproducts"
                    className={`group relative flex items-center justify-between gap-2.5 rounded-sm py-2 px-4 font-medium dark:text-bodydark1 text-dark duration-300 ease-in-out ${
                      pathname.includes("/admin/allproducts") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    All Products
                  </NavLink>
                  <ul className="ml-4 mt-2">
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <li key={index}>
                          <NavLink to={`/admin/category/${category}`}>
                            <span className=" text-dark dark:text-bodydark1  text-[18px]">
                              {category}
                            </span>
                          </NavLink>
                        </li>
                      ))
                    ) : (
                      <li>No categories found</li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <ul className="mb-6 flex flex-col gap-1.5">
                <li>
                  <NavLink
                    to="#"
                    className={`group relative flex items-center gap-2.5 justify-between rounded-sm py-2 px-4 font-medium text-dark dark:text-bodydark1 duration-300 ease-in-out ${
                      pathname.includes("/admin/addcategory") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                    onClick={openAddModal}
                  >
                    <IoMdAdd className="text-lg" />
                    Add Category
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onAddCategory={handleAddCategory}
      />
    </>
  );
};

export default Sidebar;
