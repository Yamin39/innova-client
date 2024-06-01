import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="hover:text-primary-color hover:bg-transparent" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-primary-color hover:bg-transparent" to="/rooms">
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-primary-color hover:bg-transparent" to="/my-bookings">
          My Bookings
        </NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="py-3">
        <div className="navbar px-0 justify-between">
          <div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost px-2 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>
            <div>
              <Link to="/" className="font-semibold text-3xl">
                <span className="text-primary-color">In</span>nova
              </Link>
            </div>
          </div>
          <div className="hidden md:flex">
            <ul className="navLink-container menu menu-horizontal gap-1 2xl:gap-2 2xl:px-1 font-medium text-base">{links}</ul>
          </div>

          <div className="nav-right">
            <NavLink to="/login" className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
