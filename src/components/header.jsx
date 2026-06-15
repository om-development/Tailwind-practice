import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="w-full px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
        </a>
        
        <button aria-label="Menu" className="p-2 hover:bg-gray-200/50 rounded-full transition-colors cursor-pointer">
          <svg
            className="w-8 h-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 7L4 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 12L4 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 17L4 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
