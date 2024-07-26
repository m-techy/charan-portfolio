import React from "react";

const Publications = () => {
  return (
    <div
      id="papers"
      className="relative w-full flex flex-col gap-20 py-1 pb-7 mx-auto justify-center"
    >
      <div className="font-mono px-[4.9%] text-white flex font-semibold items-end justify-end text-[110px] border-b-[0.2px] cursor-none border-opacity-45 border-light-grey">
        Papers
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[50%] flex flex-col relative overflow-hidden items-start gap-2 border-[0.2px] cursor-none border-opacity-45 border-light-grey rounded-[1.8rem] p-8 hover-target">
          <div className="font-sans hover-target text-xl text-white font-medium">
            3D VISION TRANSFORMER FOR CERVICAL SPINE FRACTURE DETECTION AND
            CLASSIFICATION <div className="font-mono my-2 hover-target">[Springer]</div>
          </div>
          <div className="font-mono hover-target text-white">
            "The paper presents a new method for detecting cervical spine
            fractures using vision transformers, featuring a 3D-enabled
            architecture and weighted multi-label logarithmic loss for precise
            classification and early detection."
          </div>
          <div className="gap-2 pt-1 items-center justify-end hidden md:flex font-sans">
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-99-2742-5_20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-10 py-3 bg-white text-center rounded-3xl hover-target">
                Read more
              </div>
            </a>
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-99-2742-5_20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center hover-target justify-center bg-blue-500 text-black font-sans text-2xl rounded-full px-3 py-2 bg-white">
                →
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
