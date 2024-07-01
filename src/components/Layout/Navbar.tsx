import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-gray-800 text-white ${
        isMenuOpen ? "w-64" : "w-16"
      } md:w-64 fixed top-0 left-0 z-10 h-screen`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-xl font-bold">Logo</span>
        </div>
        <div className="md:hidden flex items-center justify-start p-4">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:bg-gray-900"
          >
            {isMenuOpen ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
        {/* Links section */}
        <div
          className={`flex flex-col mt-4 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <NavLink
            className={(e) => {
              return `px-6 py-3 cursor-pointer ${
                e.isActive ? "bg-gray-900" : ""
              }`;
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => {
              return `px-6 py-3 cursor-pointer ${
                e.isActive ? "bg-gray-900" : ""
              }`;
            }}
            to="/bridge"
          >
            Bridge
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
