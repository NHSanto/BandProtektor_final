import React from "react";
import ImgOne from "../Assets/Group 16.png";
import ImgTwo from "../Assets/Group 17.png";
import ImgThree from "../Assets/Group 18.png";
import ImgFour from "../Assets/Group 19.png";

function ImgDiagramSection() {
  return (
    <section className="">
      <h1 className="text-[42px] text-[#333333] font-semibold text-center my-10">
        How Brand Prote
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAC00] to-[#3AE27D]">
          K
        </span>
        ter Works
      </h1>
      <div></div>
      <div className="container px-5 py-24 mx-auto">
        <div className="bg-diagram-bg bg-no-repeat bg-center flex flex-wrap text-center">
          <div className="p-2 mt-8 sm:w-1/4 w-1/2">
            <img className="mx-auto w-[100px] h-[100px]" src={ImgOne} />
            <p className="text-[#666666] text-[14px] font-normal">
              Brand Prote
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAC00] to-[#3AE27D]">
                K
              </span>
              ter Monitors Your <br /> Company Name On Google <br /> EVERY DAY
            </p>
          </div>
          <div className="p-4 mt-16 sm:w-1/4 w-1/2">
            <img className="mx-auto w-[100px] h-[100px]" src={ImgTwo} />
            <p className="text-[#666666] text-[14px] font-normal">
              Brand Prote
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAC00] to-[#3AE27D]">
                K
              </span>
              ter Finds All <br /> Competitors And Violators <br /> And Compiles
              A Report
            </p>
          </div>
          <div className="p-4 mt-16 sm:w-1/4 w-1/2">
            <img className="mx-auto w-[100px] h-[100px]" src={ImgThree} />
            <p className="text-[#666666] text-[14px] font-normal">
              Brand Prote
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAC00] to-[#3AE27D]">
                K
              </span>
              ter Reclaims <br /> Your Brand Keywords In <br /> Minutes
            </p>
          </div>
          <div className="p-4 mt-8 sm:w-1/4 w-1/2">
            <img className="mx-auto w-[100px] h-[100px]" src={ImgFour} />
            <p className="text-[#666666] text-[14px] font-normal">
              Brand Prote
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFAC00] to-[#3AE27D]">
                K
              </span>
              ter Helps You <br /> Submit Trademark <br /> Complaints
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ImgDiagramSection;
