import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-10">
      <div className="w-full p-4 border-t md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600 rounded-2xl shadow-lg">
        <span className="text-sm sm:text-center text-gray-200">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Innova
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 md:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="hover:underline me-4 md:me-6">
              All rooms
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline me-4 md:me-6">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
