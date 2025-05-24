import React from "react";
import heroimg from "../Assets/hero.png";
import TextChange from "./TextChange";

const Hero = () => {
  return (
    <section className="relative mt-10 bg-[#f9fdff]" id='home'>
      <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
        {/* Text Section */}
        <div className="md:w-2/4 md:pt-10 mx-8 text-left md:text-left mt-10">
          {/* Fixed h1 Text */}
          <h1 className="text-gray-700 font-cursive text-3xl md:text-6xl font-bold mt-12 md:mt-14">
            Hi, I'm Vansh
          </h1>

          {/* Dynamic TextChange Component */}
          <div className="text-lg text-[#107aac] font-semibold md:text-2xl mt-4 md:mt-6">
            <TextChange />
          </div>
        </div>

        {/* Fixed Image */}
        <div className="md:w-6/12 pb-5 flex justify-center mt-10 md:mt-0">
          <img src={heroimg} alt="home pic" className="w-full max-h-[450px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;