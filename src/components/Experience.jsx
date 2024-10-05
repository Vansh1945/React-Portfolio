import React from 'react';
import { skills } from "./Api/Experience";

const Experience = () => {
  return (
    <section className="overflow-hidden p-8 bg-[#f9fdff]" id='experience'>
      <h2 className="text-slate-900 text-3xl font-bold tracking-wider uppercase mb-6 text-left ml-6 font-cursive ">
        <span className='font-cursive'>E</span>xperience
      </h2>
      <div className="flex flex-wrap mt-14 justify-center gap-10 mx-10 mb-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center transition-transform  duration-300 ease-in-out"
          >
            <div className="bg-white shadow-lg rounded-2xl flex items-center justify-center w-60 h-32 hover:shadow-[#93d6f5] transition-transform  duration-300 ease-in-out mb-3">
              <img
                src={skill.img}
                alt={skill.title}
                className="w-20"
              />
            </div>
            <p className="text-medium font-semibold">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
