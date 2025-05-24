import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#f9fdff] to-[#e6f4ff]" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold uppercase tracking-wide text-left mb-12 relative inline-block">
          <span className="absolute left-0 bottom-[-8px] w-16 h-1 bg-[#107aac] rounded"></span>
          Contact
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section - Contact Info */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you would like to get in touch, feel free to reach out to me via social media or send me a message using the form.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#107aac] p-2 rounded-full text-white">
                <IoIosMail className="text-2xl" />
              </div>
              <a 
                href="mailto:vanshvicky65@gmail.com" 
                className="text-lg text-gray-700 hover:text-[#107aac] transition-colors"
              >
                vanshvicky65@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/Vansh1945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                <FaGithub className="text-gray-700 text-xl hover:text-gray-900 transition-colors" />
              </a>
              <a 
                href="www.linkedin.com/in/vansh-dogra-707b97256" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300"
              >
                <FaLinkedinIn className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/m.vansh.19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-pink-50 transition-all duration-300"
              >
                <FaInstagram className="text-pink-500 text-xl hover:text-pink-600 transition-colors" />
              </a>
              <a 
                href="https://www.facebook.com/m.vansh.12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300"
              >
                <FaFacebookF className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-1/2">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107aac] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107aac] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107aac] focus:border-transparent transition-all"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#107aac] text-white py-3 px-6 rounded-lg hover:bg-[#0d6a96] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;