import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img className="mx-auto mt-10" src={logo} alt="" />
      <h1 className="text-center mt-3 text-3xl text-gray-500 font-bold">
        Journalism Without Fear or Favour
      </h1>
      <h2 className="text-center mt-3 text-2xl font-bold text-gray-700">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </h2>
    </div>
  );
};

export default Header;
