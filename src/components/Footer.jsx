import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#11151a] pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-10">
          <img 
            src={logo} 
            alt="Smarto Logo" 
            className="h-12 w-auto object-contain mb-6 invert brightness-0" 
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <p className="text-gray-400 text-sm md:text-base text-center max-w-3xl leading-relaxed">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain<br className="hidden md:block" />
            was born and I will give you a complete account of the monen vai kemon asen
          </p>
        </div>

        <div className="w-full border-t border-gray-700/50 mb-6"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            @ All Rights Reserved By Om
          </p>
          
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-twitter transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-google transition-colors"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="hover:text-instagram transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
