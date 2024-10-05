import React, { useState } from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <nav className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-3 bg-white shadow-md shadow-gray-200">
            <div className="flex items-center">
                <h2 className="navbar-logo font-cursive font-extrabold mx-8 bg-gradient-to-r from-[#93d6f5] to-[#107aac] bg-clip-text text-transparent text-3xl">
                    <span className='font-cursive'>V</span>ansh
                </h2>
            </div>

            <div className={`${showMediaIcons ? "block" : "hidden"} md:block transition-all duration-300`}>
                <ul className="flex space-x-6 md:space-x-24">
                    <li><a href="#home" className="text-lg font-semibold font-cursive text-[#107aac] hover:text-[#36b2ec]">Home</a></li>
                    <li><a href="#about" className="text-lg font-semibold font-cursive text-[#107aac] hover:text-[#36b2ec]">About</a></li>
                    <li><a href="#experience" className="text-lg font-semibold font-cursive text-[#107aac] hover:text-[#36b2ec]">Skills</a></li>
                    <li><a href="#projects" className="text-lg font-semibold font-cursive text-[#107aac] hover:text-[#36b2ec]">Project</a></li>
                    <li><a href="#contact" className="text-lg font-semibold font-cursive text-[#107aac] hover:text-[#36b2ec]">Contact</a></li>
                </ul>
            </div>

            <div className="flex items-center">
                <ul className="hidden md:flex space-x-4 mx-8">
                    <li><a href="https://www.youtube.com/" target='_blank' rel="noreferrer" aria-label="YouTube" className="text-red-600 hover:text-red-500"><FaYoutube className="text-2xl" /></a></li>
                    <li><a href="https://www.instagram.com/m.vansh.19" target='_blank' rel="noreferrer" aria-label="Instagram" className="text-pink-600 hover:text-pink-500"><FaInstagram className="text-2xl" /></a></li>
                    <li><a href="https://www.facebook.com/m.vansh.12" target='_blank' rel="noreferrer" aria-label="Facebook" className="text-blue-600 hover:text-blue-500"><FaFacebook className="text-2xl" /></a></li>
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setShowMediaIcons(!showMediaIcons)} className="text-2xl" aria-label="Toggle menu">
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
