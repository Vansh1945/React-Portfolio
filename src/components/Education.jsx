import React from 'react';
import ptulogo from "../Assets/ptulogo.png"; 
import hplogo from "../Assets/HPBoselogo.png"; 

const Education = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-gradient-to-b from-[#f9fdff] to-[#e6f4ff]" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-left mb-12 ml-2 md:ml-6 relative inline-block">
          <span className="absolute left-0 bottom-[-8px] w-16 h-1 bg-[#107aac] rounded"></span>
          Education
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* PTU Education Card */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e1f0fa] hover:border-[#93d6f5]">
              <div className="flex flex-col items-center text-center h-full">
                <div className=" p-4 rounded-full mb-6">
                  <img
                    src={ptulogo}
                    alt="I.K. Gujral Punjab Technical University logo"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#107aac] mb-2">I.K. Gujral Punjab Technical University</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">September 2022 - Present</p>
                <div className="bg-[#f8fafc] p-4 rounded-lg w-full mt-auto">
                  <p className="text-gray-700 font-medium">
                    B.Tech Computer Science & Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HPBOSE Education Card */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e1f0fa] hover:border-[#93d6f5]">
              <div className="flex flex-col items-center text-center h-full">
                <div className=" p-4 rounded-full mb-6">
                  <img
                    src={hplogo}
                    alt="HPBOSE logo"
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#107aac] mb-2">Himachal Pradesh Board Of School Education</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">2012 - 2022</p>
                <div className="bg-[#f8fafc] p-4 rounded-lg w-full mt-auto space-y-2">
                  <p className="text-gray-700 font-medium">
                    Matriculation (2020): 78%
                  </p>
                  <p className="text-gray-700 font-medium">
                    Intermediate (2022): 69% (Non-Medical)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;