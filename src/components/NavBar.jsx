import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-4 py-4 bg-black text-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">

        {/* Top Row: Toggle & Title if needed */}
        <div className="flex items-center justify-between w-full lg:hidden mb-2">
          <div className="text-lg font-bold">LBH ENT</div>
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col items-center gap-2 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6 w-full`}
        >
          <Link
            to="/"
            className="hover:bg-gray-600 text-center border rounded-2xl px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/charity"
            className="hover:bg-gray-600 text-center border rounded-2xl px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            Charity
          </Link>
          <Link
            to="/fancard"
            className="hover:bg-gray-600 text-center border rounded-2xl px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            Membership
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-600 text-center border rounded-2xl px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-600 text-center border rounded-2xl px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
