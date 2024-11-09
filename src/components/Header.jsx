import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          Comico
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/comics" className="hover:text-yellow-400">
            Comics
          </Link>
          <Link
            to="https://www.marvel.com/movies"
            className="hover:text-yellow-400"
            target="_blank"
          >
            Movies
          </Link>
          <Link to="/cart" className="hover:text-yellow-400">
            <i className="bx bx-cart bx-sm"></i>
          </Link>
        </div>

        <div className="md:hidden flex space-x-4">
          <Link to="/cart" className=" hover:text-yellow-400">
            <i className="bx bx-cart"></i>
          </Link>
          <button
            onClick={toggleMenu}
            className="flex items-center focus:outline-none"
          >
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col items-center py-4 space-y-2 ">
            <Link to="/" onClick={toggleMenu} className="hover:text-yellow-400">
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              About
            </Link>
            <Link
              to="/comics"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
            >
              Comics
            </Link>
            <Link
              to="https://www.marvel.com/movies"
              onClick={toggleMenu}
              className="hover:text-yellow-400"
              target="_blank"
            >
              Movies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
