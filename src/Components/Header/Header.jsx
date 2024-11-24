import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img className="mx-auto mt-10" src={logo} alt="" />
      <h1 className="text-center mt-3 text-3xl text-gray-500 font-bold">
        Journalism Without Fear or Favour
      </h1>
      <h2 className="text-center mt-3 text-2xl font-bold text-gray-700">
        Sunday, November 27, 2025
      </h2>
    </div>
  );
};

export default Header;
