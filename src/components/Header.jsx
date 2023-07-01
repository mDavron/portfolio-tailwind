import React from "react";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
