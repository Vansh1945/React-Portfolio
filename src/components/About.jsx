import React from "react";
import aboutimg from "../Assets/potho.jpg";
import { FaDownload } from "react-icons/fa";
import { Button } from '@mui/material';

const About = () => {
  return (
    <section className="overflow-hidden p-8 bg-[#f9fdff]" id="about">
      <h2 className="text-slate-900 text-3xl font-bold tracking-wider uppercase mb-4 text-left ml-6 font-cursive">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center mx-10 mt-3">
        <ul className="flex flex-col gap-6 w-full md:w-2/3">
          <li className="flex flex-col md:flex-row rounded-md list-none p-2">
            <div className="mx-5 justify-between">
              <p className="text-lg text-gray-700 mb-5 md:mt-0 text-justify leading-relaxed tracking-normal">
                Hi, I'm Vansh, a passionate full-stack developer. Currently pursuing a B.Tech in Computer Science Engineering, I have honed my skills in various programming languages, including Python, Django, JavaScript, C, C++, HTML, and CSS.
              </p>
              <br />
              <p className="text-lg text-gray-700 mb-5 md:mt-0 text-justify leading-relaxed tracking-normal">
                I enjoy creating dynamic and responsive web applications, leveraging my knowledge of Tailwind CSS to enhance user experience. With a strong foundation in both front-end and back-end technologies, I'm dedicated to building efficient solutions that meet user needs and drive innovation.
              </p>
              <div className="flex justify-center mt-6 md:justify-start md:mt-8">
                <Button
                  variant="contained"
                  href="https://drive.google.com/file/d/1qaBAtkhGf9SwecX5dHxP1gZYrqZXpLvf/view?usp=drive_link"
                  target="_blank"
                  endIcon={<FaDownload />}
                  sx={{
                    width: '30%',
                    backgroundColor: '#107aac',
                    '&:hover': {
                      backgroundColor: '#0f4c6a'
                    }
                  }}
                >
                  Resume
                </Button>
              </div>
            </div>
          </li>
        </ul>

        <div className="justify-center md:justify-end md:w-1/3 flex mt-10 md:mt-0">
          <div className="overflow-hidden rounded-full border-5 border-[#93d6f5]">
            <img
              src={aboutimg}
              alt="Vansh"
              className="w-full h-full object-cover rounded-full transition-transform transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
