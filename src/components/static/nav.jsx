import { useState } from "react";
import logo from "../../image/logo.svg";

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
            <li className="mx-5 font-semibold text-base border-b-4 border-primary text-primary">
              Home
            </li>
            <li className="mx-5 font-semibold text-base">About</li>
            <li className="mx-5 font-semibold text-base">Services</li>
            <li className="mx-5 font-semibold text-base">Blog</li>
            <li className="mx-5 font-semibold text-base">Contact</li>
          </ul>
        </div>
        <div className="hidden md:block border-primary text-primary border-2 rounded-3xl text-base font-semibold shadow-sm py-1 px-4">
          Login
        </div>
        <div onClick={handleClick} className="md:hidden cursor-pointer">
          menu
        </div>
      </div>
      <div
        style={{ transition: "all 0.3s ease-in-out" }}
        className={
          isOpen
            ? " w-60 absolute  bg-purple-300 h-screen top-0 overflow-y-auto"
            : "w-0 absolute overflow-hidden bg-purple-300 h-screen top-0 overflow-y-auto"
        }
      >
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
    </nav>
  );
};

export default Nav;
