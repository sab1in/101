import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo.svg";

const NavList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative font-popins">
      <div className="flex justify-between items-center w-10/12 h-24 mx-auto">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex  justify-between items-center">
            {Array.isArray(NavList) &&
              NavList.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      exact
                      to={item.path}
                      className="mx-5 font-semibold text-base border-b-4 border-white"
                      activeClassName="border-primary text-primary"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="hidden md:block border-primary text-primary border-2 rounded-3xl text-base font-semibold shadow-sm py-1 px-4">
          Login
        </div>
        <div onClick={handleClick} className="md:hidden cursor-pointer">
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
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div
        style={{ transition: "all 0.3s ease-in-out" }}
        className={
          isOpen
            ? " w-full fixed  flex  h-screen top-0 overflow-y-auto z-50"
            : "w-0 fixed overflow-hidden flex h-screen top-0 overflow-y-auto z-50"
        }
      >
        <div className="w-60 h-full bg-primary1">
          <div className="flex justify-center ">
            <img className="flex-shrink-0 mt-5 w-36" src={logo} alt="logo" />
          </div>
          <ul className="flex flex-col pt-10 justify-between items-center">
            <li className="my-5 font-semibold text-base border-b-4 border-primary text-primary">
              Home
            </li>
            <li className="my-5 font-semibold text-base">About</li>
            <li className="my-5 font-semibold text-base">Services</li>
            <li className="my-5 font-semibold text-base">Blog</li>
            <li className="my-5 font-semibold text-base">Contact</li>
          </ul>
          <div className="flex justify-center mt-6">
            <div className=" text-blue-500 border-blue-500 border-2 rounded-3xl text-base font-semibold shadow-sm py-1 px-4">
              Login
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="bg-gray-900 opacity-60 flex-1"
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
