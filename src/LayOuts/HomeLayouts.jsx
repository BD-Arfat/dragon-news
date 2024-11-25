import React from "react";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="md:w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayouts;
