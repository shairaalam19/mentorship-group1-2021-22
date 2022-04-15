import React from "react";
import Cards from '../Cards';
import Footer from '../Footer';
import "../../App.css";
import { HeroSection } from "../HeroSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
