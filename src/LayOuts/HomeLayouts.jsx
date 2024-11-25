import React from "react";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="md:w-11/12 mx-auto mt-5">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto mt-10">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-3">left site</section>
        <section className="col-span-6">center site</section>
        <section className="col-span-3">right site</section>
      </main>
    </div>
  );
};

export default HomeLayouts;
