import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-yellow-500">
            Comico
          </Link>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
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
        </div>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Comico.</p>
      </div>
    </footer>
  );
}
