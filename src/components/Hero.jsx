import React from "react";
import man from "../assets/man.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#f1f2f4] flex items-center pt-24 overflow-hidden">
      <div className="absolute left-10 md:left-32 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-[1px] border-gray-300/50 rotate-45 transform origin-center z-0 hidden lg:block"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row justify-between items-center z-10 max-w-7xl mx-auto h-full">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mt-12 lg:mt-0 pb-12 lg:pb-0 z-10 relative">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4">
            Hay! There
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#222] uppercase tracking-tight mb-4">
            I am Smith
          </h1>
          <p className="text-gray-600 text-lg md:text-2xl font-light tracking-wide mb-10">
            A Professional Freelancer
          </p>
          <button className="border border-black px-8 py-3 text-sm font-semibold tracking-widest hover:bg-black hover:text-white transition-colors">
            HIRE ME
          </button>
        </div>

        <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-end items-end relative z-10 mt-8 lg:mt-0">
          <img
            src={man}
            alt="Smith"
            className="w-[80%] md:w-[60%] lg:w-[85%] max-w-md lg:max-w-none object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute bottom-8 right-8 lg:right-24 flex space-x-6 text-gray-400 z-20 text-lg">
        <a href="#" className="hover:text-black transition-colors"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-twitter transition-colors"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-youtube transition-colors"><i className="fab fa-youtube"></i></a>
        <a href="#" className="hover:text-google transition-colors"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="hover:text-instagram transition-colors"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default Hero;
