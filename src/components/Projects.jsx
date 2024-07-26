import React from "react";
import github from "../assets/github.png";
import g3nai from "../assets/g3naiproject.png";
import pawnitor from "../assets/pawnitor.png";
import pawnitorlogo from '../assets/pawnitorlogo.png'
import g3ni from "../assets/g3ni.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative w-[90%] flex flex-col gap-20 mx-auto justify-center mt-7 py-7"
    >
      <div className="w-full flex justify-between">
        <div className="w-[35%]"></div>
        <div className="font-mono text-white w-[65%] text-lg">
          .../Projects...
        </div>
      </div>
      <div className="w-full flex gap-8">
        <div className="w-[35%] flex flex-col gap-4">
          <div className="text-white text-xl font-sans">G3n.ai</div>
          <div className="font-mono text-white flex flex-wrap gap-3 text-sm">
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              React
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              Tailwind
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              Three.js
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              Python
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              FastApi
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              LLM
            </div>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <div className="text-white text-sm">
              G3n.ai - an innovative AI platform transforming text into music,
              images, and speech.
            </div>
            <div className="text-white text-sm">
              This platform offers intuitive interactions and high-quality
              outputs with just a few clicks, delivering effortless AI-driven
              creativity and a smooth, engaging user experience.
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/m-techy/G3n.ai"
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
        <div className="relative font-mono text-white w-[65%] ">
          <img src={g3nai} alt="G3n.ai" className="relative z-10" />
          <div className="absolute flex items-center z-20 translate-x-[14vw] -translate-y-[6vw]">
            <a
              href="https://g3n-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-full border-[0.2px] border-opacity-45 border-light-grey h-fit p-3 hover-target">
                <img src={g3ni} alt="github" className="w-7 h-7 hover-target" />
              </div>
            </a>
            <a
              href="https://g3n-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" bg-white  rounded-full border-[0.2px] border-opacity-45 border-light-grey h-fit p-3 ml-[-1rem] hover-target">
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
      </div>
      <div className="w-full flex flex-row-reverse gap-8 py-14 pt-[4rem]">
        <div className="w-[35%] flex flex-col gap-4">
          <div className="text-white text-xl font-sans">Pawnitor</div>
          <div className="font-mono text-white flex flex-wrap gap-3 text-sm">
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              React
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              Tailwind
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              Python
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              FastApi
            </div>
            <div className="py-2 px-4 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem]">
              CV
            </div>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <div className="text-white text-sm">
              Pawnitor - Smart Pet Monitoring for a cleaner community.
            </div>
            <div className="text-white text-sm">
              This platform features high-resolution cameras with AI-driven
              image recognition to detect pet waste and identify pets in
              real-time. It ensures prompt cleanup with an auto-cleanup device
              and provides compliance reports to maintain community cleanliness
              effortlessly.
            </div>
          </div>
          <div className="flex items-center">
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
        <div className="relative font-mono text-white w-[65%] pb-20">
          <img src={pawnitor} alt="pawnitor" className="relative z-10" />
          <div className="absolute flex items-center z-20 translate-x-[1.5vw] -translate-y-[29vw]">
            <a
              // href="https://g3n-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-black rounded-full border-[0.2px] border-opacity-45 border-light-grey h-fit p-3 hover-target">
                <img src={pawnitorlogo} alt="pawnitor" className="w-7 h-7 hover-target" />
              </div>
            </a>
            <a
              // href="https://g3n-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" bg-white  rounded-full border-[0.2px] border-opacity-45 border-light-grey h-fit p-3 ml-[-1rem] hover-target">
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
          <div className="w-[50vw] h-[50vw] rounded-full border-[1.5px] border-dark-grey absolute -translate-x-[17.5vw] -translate-y-[38vw] z-0 "></div>
        </div>
      </div>
      <div className="w-[50vw] h-[50vw] rounded-full border-[1.5px] border-dark-grey absolute translate-x-[55vw] top-[-1.8rem] z-0 "></div>
    </div>
  );
};

export default Projects;
