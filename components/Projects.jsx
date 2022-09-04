import React from 'react';
import ProjectSpotlight from './ProjectSpotlight';
const Projects = () => {
    return (
        <div id="projects" className="bg-slate-100 p-10 pb-40">
            <h2 className="text-center text-sm tracking-widest font-semibold text-gray-400 my-20">
                CHECK OUT SOME OF MY PROJECTS
            </h2>
            <div>
                <ProjectSpotlight></ProjectSpotlight>
            </div>
        </div>
    );
};

export default Projects;
