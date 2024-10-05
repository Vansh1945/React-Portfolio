import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#417289] p-6">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Copyright Text */}
        <p className="text-white  text-lg text-center mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Developed by Vansh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
