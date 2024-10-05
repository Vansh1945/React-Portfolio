import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="p-8 bg-[#f9fdff]" id="contact">
      <h2 className="text-slate-900 text-3xl font-bold tracking-wider uppercase mb-4 text-left ml-6 font-cursive">
        Contact
      </h2>

      {/* Main Container for Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 mx-6 md:space-y-0">

        {/* Left Section for Contact Info */}
        <div className="md:w-1/2 w-full p-4 mx-4">
          <p className="mb-4 text-xl">
            If you would like to get in touch, feel free to reach out to me via social media or send me a message using the form below.
          </p>

          <br />
          <p className="mb-4 text-xl flex items-center gap-2">
          <IoIosMail className="text-2xl text-gray-700" /><a href="mailto:vanshvicky65@gmail.com">
              vanshvicky65@gmail.com
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="w-full flex justify-center md:justify-start gap-6 mt-6">
            {/* Icon with hover glow effect */}
            <div className="bg-white shadow-lg rounded-full flex items-center justify-center w-12 h-12 hover:shadow-gray-600  hover:scale-110 transition-transform duration-300 ease-in-out">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-700 w-8 h-8 hover:text-gray-900 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-full flex items-center justify-center w-12 h-12 hover:shadow-blue-400  hover:scale-110 transition-transform duration-300 ease-in-out">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-700 w-8 h-8 hover:text-blue-900 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-full flex items-center justify-center w-12 h-12 hover:shadow-pink-400  hover:scale-110 transition-transform duration-300 ease-in-out">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 w-8 h-8 hover:text-pink-600 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-full flex items-center justify-center w-12 h-12 hover:shadow-blue-400  hover:scale-110 transition-transform duration-300 ease-in-out">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 w-8 h-8 hover:text-blue-800 transition-colors duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section for Contact Form */}
        <div className="md:w-1/2 w-full p-4 mx-4">
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#107aaa]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#107aaa]"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#107aaa]"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0f4c6a] text-white p-2 rounded-lg hover:bg-[#1279a8] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
