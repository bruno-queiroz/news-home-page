import React from "react";
import logoImg from "../assets/images/logo.svg";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { RxCross2 as CloseMenuIcon } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className=" flex justify-center w-full">
      <div className="max-w-[1440px] w-full flex justify-between p-4 ">
        <img src={logoImg} className="object-contain" alt="logo" />

        <nav className="">
          <button
            aria-label="open-menu"
            onClick={() => setIsMenuOpen(true)}
            className="sm:hidden"
          >
            <MenuIcon className="text-4xl" />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute inset-0 bg-[rgba(0,0,0,0.4)] sm:hidden`}
            onClick={() => setIsMenuOpen(false)}
          />

          <ul
            className={`fixed bg-white right-0 top-0 bottom-0 left-[45%] p-4 transition-transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-[100%]"
            } sm:flex sm:relative sm:translate-x-0 sm:gap-12 sm:inset-0
              `}
          >
            <button
              className="flex w-full justify-end mb-12 sm:hidden"
              aria-label="close-menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseMenuIcon className="text-4xl " />
            </button>
            <li className="py-2">
              <a href="/">Home</a>
            </li>
            <li className="py-2">
              <a href="#">New</a>
            </li>
            <li className="py-2">
              <a href="#">Popular</a>
            </li>
            <li className="py-2">
              <a href="#">Trending</a>
            </li>
            <li className="py-2">
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
