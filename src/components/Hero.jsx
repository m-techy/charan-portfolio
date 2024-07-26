import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <div className="hero relative w-[90%] flex flex-col mx-auto justify-center min-h-[85%]">
      <div className="flex justify-between items-end">
        <div className="font-mono text-white text-9xl ml-[-1.3%]">
          AI/ML-Web
        </div>
        <div className="gap-2 py-3 items-center justify-end hidden md:flex font-sans relative z-30">
          <div
            onClick={() => scrollToSection("projects")}
            className="px-24 py-3 bg-white text-center rounded-3xl cursor-pointer hover-target"
          >
            Projects
          </div>
          <div
            onClick={() => scrollToSection("projects")}
            className="flex items-center hover-target justify-center bg-blue-500 text-black font-sans text-2xl rounded-full px-3 py-2 bg-white cursor-pointer"
          >
            →
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex order-2 md:order-1 flex-wrap space-x-[5px] text-lg w-full tracking-wide">
          <span className="text-light-grey font-sans text pl-1">Crafting</span>
          <span className="text-white font-sans italic hover-target">
            intelligent solutions
          </span>
          <span className="text-light-grey font-sans pl-[2px]">and</span>
          <span className="text-white font-sans italic hover-target">
            turning visions
          </span>
          <span className="text-light-grey font-sans ">into</span>
          <span className="text-white font-sans italic hover-target">
            digital reality.
          </span>
        </div>
        <div className="font-mono md:order-2 order-1 text-white text-9xl">
          Developer
        </div>
      </div>
      <div className="gap-2 items-center justify-end flex md:hidden">
        <div
          onClick={() => scrollToSection("projects")}
          className="px-20 py-3 bg-white text-center rounded-3xl cursor-pointer"
        >
          Projects
        </div>
        <div
          onClick={() => scrollToSection("projects")}
          className="flex items-center justify-center bg-blue-500 text-black font-sans text-2xl rounded-full px-3 py-2 bg-white cursor-pointer"
        >
          →
        </div>
      </div>
      <SocialMediaLinks />
    </div>
  );
};

export default Hero;
