import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowcase from "./CategoryShowcase";
import Register from "./Register";
import { LocatioSpade } from "./LocatioSpade";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowcase />
      <Register />
      <LocatioSpade />
      <AboutUs />
      <AppSection />
      <Sponsor />
    </div>
  );
};

export default Home;
