import React, { useState } from 'react';
import { skills } from "./Api/Experience";

const Experience = () => {
  const [filter, setFilter] = useState('all');
  
  // Get unique categories from skills
  const categories = ['all', ...new Set(skills.map(skill => skill.category || 'other'))];
  
  // Filter skills based on selection
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section className="overflow-hidden p-8 bg-[#f9fdff]" id='experience'>
      <h2 className="text-slate-900 text-3xl font-bold tracking-wider uppercase mb-6 text-left ml-6 font-cursive">
        <span className='font-cursive'>E</span>xperience
      </h2>
      
      {/* Simple filter added here */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium border ${
                filter === category 
                  ? 'bg-[#93d6f5] text-slate-900 border-[#93d6f5]'
                  : 'bg-white text-slate-700 border-gray-300 hover:bg-gray-50'
              } ${category === 'all' ? 'rounded-l-lg' : ''} ${
                category === categories[categories.length - 1] ? 'rounded-r-lg' : 'border-r-0'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap mt-6 justify-center gap-10 mx-10 mb-10">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center transition-transform duration-300 ease-in-out"
          >
            <div className="bg-white shadow-lg rounded-2xl flex items-center justify-center w-60 h-32 hover:shadow-[#93d6f5] transition-transform duration-300 ease-in-out mb-3">
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