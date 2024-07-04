import { NavLink } from "react-router-dom";
import "../utility/custom.css";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const Links = [
    <>
      {" "}
      <div className="flex font-medium md:flex-col lg:flex-row flex-col gap-2 md:gap-5 text-base">
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "nav-link-active"
              : "nav-link-inactive"
          }
        >
          {" "}
          Home{" "}
        </NavLink>{" "}
        <NavLink
          to={"/about-me"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "nav-link-active"
              : "nav-link-inactive"
          }
        >
          {" "}
          About Me{" "}
        </NavLink>{" "}
        <NavLink
          to={"/projects"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "nav-link-active"
              : "nav-link-inactive"
          }
        >
          {" "}
          Projects{" "}
        </NavLink>{" "}
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "nav-link-active"
              : "nav-link-inactive"
          }
        >
          {" "}
          Contact{" "}
        </NavLink>{" "}
      </div>{" "}
    </>,
  ];
  return (
    <div className="navbar bg-base-100">
      {" "}
      <div className="navbar-start">
        {" "}
        <div className="dropdown">
          {" "}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-24 p-2 shadow"
          >
            {" "}
            {Links}{" "}
          </ul>{" "}
        </div>{" "}
        <NavLink className="text-xl" to="/">
          {" "}
          Minhajul Hasan{" "}
        </NavLink>{" "}
      </div>{" "}
      <div className="navbar-center hidden lg:flex">
        {" "}
        <ul className="menu menu-horizontal px-1">{Links}</ul>{" "}
      </div>{" "}
      <div className="navbar-end">
        {" "}
        <ThemeController />{" "}
      </div>{" "}
    </div>
  );
};
export default Navbar;
