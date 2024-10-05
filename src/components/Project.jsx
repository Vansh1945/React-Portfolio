import React from 'react';
import { Projects } from './Api/Project'; 
import { Button } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material'; 

const Project = () => {
  return (
    <section className="overflow-hidden p-8 bg-[#f9fdff]" id="projects">
      <h2 className="text-3xl font-bold uppercase tracking-wide text-left mb-8 ml-6 font-cursive ">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-8">
        {Projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full items-stretch hover:shadow-lg hover:shadow-[#93d6f5] transition-transform duration-300 transform ">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-[200px] object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{project.title}</h3>
            <p className="text-gray-600 mb-4 text-center flex-grow">{project.details}</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-auto">
              <Button 
                variant="outlined" 
                href={project.github} 
                target="_blank"
                startIcon={<GitHub />}
                sx={{ width: '100%', md: { width: 'auto' }, color: '#107aac', borderColor: '#107aac' }}
              >
                Code
              </Button>
              <Button 
                variant="contained" 
                href={project.liveLink} 
                target="_blank"
                endIcon={<Launch />}
                sx={{ width: '100%', md: { width: 'auto' }, backgroundColor: '#107aac' }}
              >
                Live
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
