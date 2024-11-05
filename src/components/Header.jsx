import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bangers text-red-500">Comico</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-500">
            About
          </Link>
          <Link to="/comics" className="hover:text-red-500">
            Comics
          </Link>
          <Link to="/gallery" className="hover:text-red-500">
            Gallery
          </Link>
          <Link to="/cart" className="hover:text-red-500">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
