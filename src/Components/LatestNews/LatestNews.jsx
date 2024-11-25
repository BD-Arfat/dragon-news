import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-4 mt-5 bg-slate-300 items-center ">
      <h3 className="bg-red-900 px-4 py-1 text-white font-bold">Latest</h3>
      <p>
        <Marquee pauseOnHover={true} className="text-xl p-2">
          <Link to={"/"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            ipsam
          </Link>
          <Link to={"/"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            ipsam
          </Link>
          <Link to={"/"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            ipsam
          </Link>
          <Link to={"/"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            ipsam
          </Link>
        </Marquee>
      </p>
    </div>
  );
};

export default LatestNews;
