import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation links

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="relative bg-gray-900 text-white p-4">
      {/* Toggle Button */}
      <button
        onClick={toggleNav}
        className="absolute left-4 top-4 block lg:hidden px-3 py-2 text-white focus:outline-none"
      >
        {isNavOpen ? (
          // 'X' Icon for the open state
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Menu Icon for the closed state
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:items-center lg:justify-between h-auto">
        {/* Name Section */}
        <div className="text-3xl font-bold mb-4 lg:mb-0">Jongho Bae</div>

        {/* Navigation Bar */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isNavOpen ? "block" : "hidden"
          } w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors py-2"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors py-2"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors py-2"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors py-2"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
