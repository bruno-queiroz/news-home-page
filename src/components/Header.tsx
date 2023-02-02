import React from "react";
import logoImg from "../assets/images/logo.svg";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logoImg} alt="logo" />

        <nav>
          <button>
            <MenuIcon />
          </button>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
