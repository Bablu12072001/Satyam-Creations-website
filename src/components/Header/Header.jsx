import { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu"; // Importing the menu icon
import logo from "/src/assets/Satyam creation.png"; // Assuming this is your logo image

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-gray-100">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              className="w-16 lg:w-20 rounded-lg shadow-lg object-cover"
              src={logo}
              alt="Logo"
            />
            <div className="ml-2 text-lg font-bold text-gray-800">
              Satyam Creations
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex items-center">
            <button className="lg:hidden" onClick={toggleMenu}>
              <MenuIcon fontSize="large" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-100 border-b border-gray-200 lg:hidden">
              <ul className="flex flex-col gap-2 py-2">
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="text-orange-700"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="text-orange-700"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    activeClassName="text-orange-700"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-grow justify-center items-center">
            <ul className="flex gap-8 font-medium">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-orange-700"
                  className="block py-2 px-3 duration-200 text-gray-700 border-b border-transparent hover:bg-gray-50 hover:text-orange-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="text-orange-700"
                  className="block py-2 px-3 duration-200 text-gray-700 border-b border-transparent hover:bg-gray-50 hover:text-orange-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="text-orange-700"
                  className="block py-2 px-3 duration-200 text-gray-700 border-b border-transparent hover:bg-gray-50 hover:text-orange-700"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
