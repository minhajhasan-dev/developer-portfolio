import { Glow } from "@codaworks/react-glow";
import { CgMenuGridO } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "../utility/custom.css";
import ContactMe from "./ContactMe";
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
          to={"/skills"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "nav-link-active"
              : "nav-link-inactive"
          }
        >
          {" "}
          Skills{" "}
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
      </div>{" "}
    </>,
  ];
  return (
    // <div className="navbar bg-base-100">
    //   {" "}
    //   <div className="navbar-start">
    //     {" "}
    //     <div className="dropdown">
    //       {" "}
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         {" "}
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           {" "}
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />{" "}
    //         </svg>{" "}
    //       </div>{" "}
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-24 p-2 shadow"
    //       >
    //         {" "}
    //         {Links}{" "}
    //       </ul>{" "}
    //     </div>{" "}
    //     <Glow color="hsl(338.69 100% 48.04%)">
    //       <NavLink
    //         className="md:text-2xl text-base  glowable-text font-mono font-semibold"
    //         to="/"
    //       >
    //         {" "}
    //         Minhajul Hasan{" "}
    //       </NavLink>{" "}
    //     </Glow>{" "}
    //   </div>{" "}
    //   <div className="navbar-center hidden lg:flex">
    //     {" "}
    //     <ul className="menu menu-horizontal px-1">{Links}</ul>{" "}
    //   </div>{" "}
    //   <div className="navbar-end flex gap-4">
    //     {" "}
    //     {/* contact me component here */}
    //     <ContactMe /> <ThemeController />{" "}
    //   </div>{" "}
    // </div>
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn hover:bg-transparent  btn-ghost"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg> */}
              <CgMenuGridO className="text-2xl" />
            </label>
          </div>
          <div className="navbar-start">
            <Glow color="hsl(338.69 100% 48.04%)">
              <NavLink
                className="md:text-2xl text-base glowable-text font-mono font-semibold"
                to="/"
              >
                Minhajul Hasan
              </NavLink>
            </Glow>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div className="navbar-end flex gap-4">
            <ContactMe />
            <ThemeController />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-60 md:w-80 p-4">
          {Links}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
