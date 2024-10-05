import React from 'react';
import ptulogo from "../Assets/ptulogo.png"; 
import hplogo from "../Assets/HPBoselogo.png"; 

const Education = () => {
  return (
    <section className="overflow-hidden p-8 bg-[#f9fdff]" id="education">
      <h2 className="text-3xl font-bold uppercase tracking-wide text-left mb-8 ml-2 md:ml-6 font-cursive">Education</h2>
      <div className="flex flex-col md:flex-row">
        {/* PTU Education Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform  duration-300 hover:shadow-lg hover:shadow-[#93d6f5] flex flex-col justify-between h-full min-h-[300px]">
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 text-center">I.K. Gujral Punjab Technical University</h3>
              <img
                src={ptulogo}
                alt="I.K. Gujral Punjab Technical University logo"
                className="w-20 h-20 mb-4 mt-4"
              />
              <p className="text-lg font-medium text-gray-700 text-center">September 2022 - Present</p>
              <p className="text-gray-700 text-center">
                <span className="font-medium">Course: </span>B.Tech Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>

        {/* HPBOSE Education Card */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform  duration-300 hover:shadow-lg hover:shadow-[#93d6f5] flex flex-col justify-between h-full min-h-[300px]">
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 text-center">Himachal Pradesh Board Of School Education</h3>
              <img
                src={hplogo}
                alt="HPBOSE logo"
                className="w-20 h-20 rounded-full shadow-lg mb-4 mt-4"
              />
              <p className="text-lg font-medium text-gray-700 text-center">2012 - 2022</p>
              <p className="text-gray-700 text-center">
                <span className="font-medium">Course:</span> Matriculation 2020: 78%
              </p>
              <p className="text-gray-700 text-center">
                <span className="font-medium">Course:</span> Intermediate 2022: 69% (Non-Medical)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
