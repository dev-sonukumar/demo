import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow w-full bg-[var(--bg1)]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="font-bold md:text-[24px]">Sonu Kumar</h1>
            </div>
          </div>
          <div className="hidden md:block ">
            {/* -----show  on  Mobile only------ */}
            <div className="ml-10 flex items-baseline space-x-4 md:text-xl">
              <a
                href="/"
                className="hover:bg-[var(--mainColorlight)]  hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-[17px]"
              >
                Home
              </a>
              <a
                href="/"
                className=" hover:bg-[var(--mainColorlight)]  hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-[17px]"
              >
                About
              </a>
              <a
                href=""
                className=" hover:bg-[var(--mainColorlight)]  hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-[17px]"
              >
                Contact
              </a>
              <a
                href="/"
                className=" hover:bg-[var(--mainColorlight)] hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-[17px]"
              >
                Projects
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className=" focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className=" block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
