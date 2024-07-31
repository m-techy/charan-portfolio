import React from "react";
import myphoto from "../assets/myphoto.jpg";
import github from "../assets/github.png";

const About = () => {
  return (
    <div id="about" className="relative w-[90%] flex flex-col gap-20 mx-auto justify-center mt-7 py-7">
      <div className="flex justify-between z-10 w-[88%]">
        <div className="text-white font-mono">.../About me...</div>
        <div className="text-light-grey w-[55%] text-xl">
          Hello! I'm Charan,I'm an
          <span className="text-white font-sans italic hover-target mx-2">
            AI and Frontend Developer.
            <br />
          </span>
          With more than
          <span className="text-white font-sans italic hover-target mx-2">
            1.8 Years
          </span>
          Experience.
        </div>
      </div>
      <div className="flex justify-between text-white w-full">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex flex-col relative overflow-hidden items-start gap-2 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem] p-8 hover-target hover:bg-white hover:text-black">
            <div className="font-sans hover-target text-xl">AI / ML</div>
            <div className="font-mono hover-target">
              Python / DL / Scikit-Learn / Langchain
            </div>
          </div>
          <div className="flex justify-between  w-11/12">
            <div className="flex  w-[70%] flex-col relative overflow-hidden items-start gap-2 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem] p-8 hover-target hover:bg-white hover:text-black">
              <div className="font-sans hover-target text-xl">Styles</div>
              <div className="font-mono hover-target">
                TailWind / SCSS / SASS / MUI / RadixUI / Bootstrap
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="https://github.com/m-techy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-black rounded-full border-[0.2px] border-opacity-45 border-light-grey h-fit p-3 hover-target">
                  <img
                    src={github}
                    alt="github"
                    className="w-6 h-6 hover-target"
                  />
                </div>
              </a>
              <a
                href="https://github.com/m-techy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white rounded-full border-[0.2px] border-opacity-45 border-light-grey h-fit p-3 ml-[-1rem] hover-target">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#121212"
                    className="hover-target"
                  >
                    <path
                      d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"
                      className="hover-target"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col relative overflow-hidden items-start gap-2 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem] p-8 hover-target hover:bg-white hover:text-black">
          <div className="font-sans hover-target text-xl">Front-end</div>
            <div className="font-mono hover-target">
              React / Next.js / Javascript / Redux Toolkit / Figma
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="text-light-grey text-base w-[60%] ">
              Some of my
              <span className="text-white font-sans italic hover-target mx-2">
                favorite technologies, topics, or tools
              </span>
              that I worked with
            </div>
            <div className="flex flex-col relative overflow-hidden items-start gap-2 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem] p-8 hover-target hover:bg-white hover:text-black">
              <div className="font-sans hover-target text-xl">Dev-ops</div>
              <div className="font-mono hover-target flex">
                Nginx / (CI/CD) / Git / AWS
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <img
            src={myphoto}
            alt="Charan"
            className="rounded-[2rem] h-[79vh] object-cover z-10 hover-target"
          />
        </div>
      </div>
      <div className="w-[50vw] h-[50vw] rounded-full border-[1.5px] border-dark-grey absolute right-[-11.5rem] top-[-1.8rem] z-0 "></div>
    </div>
  );
};

export default About;
