import React from "react";

const Work = () => {
  return (
    <div className="relative w-[100%] flex flex-col mx-auto justify-center mt-7 py-7">
      <div className="font-mono px-[4.9%] text-white flex font-semibold items-end justify-end text-[110px]">
        Work
      </div>
      <div className="flex flex-col items-center justify-center w-[101%] ml-[-2px]">
        <div className="text-white w-full px-[4.9%] py-4 flex items-center justify-between border-[0.2px] cursor-none border-opacity-45 border-light-grey hover-target hover:bg-white hover:text-black">
        <div className="flex flex-col w-[19%]">
            <div className="font-sans text-xl hover-target flex gap-2 items-center">2024 <div className="font-mono text-sm">[July-Sept]</div></div>
            <div className="font-sans text-sm hover-target">3 Months</div>
          </div>
          <div className="font-sans text-xl w-[25%] text-left hover-target">
            Brane Enterprises Pvt Ltd
          </div>
          <div className="font-mono text-xl text-left w-[40%] hover-target">
            SDE | AI & ML, React
           </div>
        </div>
        <div className="text-white w-full px-[4.9%] py-4 flex items-center justify-between border-[0.2px] cursor-none border-opacity-45 border-light-grey hover-target hover:bg-white hover:text-black">
        <div className="flex flex-col w-[19%]">
            <div className="font-sans text-xl hover-target flex gap-2 items-center">2023 - 2024 <div className="font-mono text-sm">[June-July]</div></div>
            <div className="font-sans text-sm hover-target">1 Year 1 Month</div>
          </div>
          <div className="font-sans text-xl w-[25%] text-left hover-target">
            Brane Enterprises Pvt Ltd
          </div>
          <div className="font-mono text-xl text-left w-[40%] hover-target">
            SDE Intern | AI & ML, React
          </div>
        </div>
        <div className="text-white w-full px-[4.9%] py-4 flex items-center justify-between border-[0.2px] cursor-none border-opacity-45 border-light-grey hover-target hover:bg-white hover:text-black">
          <div className="flex flex-col w-[19%]">
            <div className="font-sans text-xl hover-target flex gap-2 items-center">2023 <div className="font-mono text-sm">[Jan-June]</div></div>
            <div className="font-sans text-sm hover-target">6 Months</div>
          </div>
          <div className="font-sans text-xl w-[25%] text-left hover-target">
            Brane Enterprises Pvt Ltd
          </div>
          <div className="font-mono text-xl text-left w-[40%] hover-target">
            Freelance AI Intern
          </div>
        </div>
      </div>
      <div className="font-sans px-[4.9%] text-white flex flex-col py-5 items-end justify-end ">
        <div className="text-light-grey text-xl">Work experience</div>
        <div className="text-white italic text-xl">1 year 10 months</div>
      </div>
    </div>
  );
};

export default Work;
