import React from "react";
import WatchIcon from "../assets/Play.png";
import Group from "../assets/Group.png";
import Banner from "../assets/banner.png";


const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-5 lg:my-[85px]">
      <div className="flex flex-col-reverse lg:flex-row lg:gap-[60px] items-center">
        <div className="space-y-2 lg:space-y-4">
          <div className="flex gap-2 items-center bg-[#E1E7FF] w-[300px] py-2 px-4 rounded-full">
            <img className="h-4 w-4" src={Group} alt="" />
            <p className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent font-medium">New: AI-Powered Tools Available</p>
          </div>

          <h1 className="font-bold lg:font-extrabold text-4xl lg:text-7xl mb-3 lg:mb-5">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[10px] lg:text-sm text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>

          <div className="flex gap-4">
            <button className="font-bold p-4 rounded-full text-white text-sm bg-linear-to-l from-[#9514FA] to-[#4F39F6] btn hover:border hover:border-[#9514FA] hover:bg-transparent
               hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6]
               hover:bg-clip-text hover:text-transparent">Explore Products</button>

            <div className="flex items-center gap-1 font-bold btn border border-[#9514FA] rounded-full text-sm">
                <img className="h-4 w-4" src={WatchIcon} alt="" />
                <button className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent ">Watch Demo</button>
            </div>
          </div>
        </div>

        <div className="mb-5 transition duration-300 hover:shadow-xl hover:scale-105">
            <img className="w-86 h-80 lg:h-[590px] lg:w-[500px]" src={Banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
