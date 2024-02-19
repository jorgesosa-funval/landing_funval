import React from "react";
import About from "./components/About";
import Companies from "./components/Companies/companies";
import Graduates from "./components/Graduates";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Connections from "./components/Connections";



export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Video />
      <Graduates />
      <Connections/>
      {/* <Companies/> */}
    </>
  );
}
