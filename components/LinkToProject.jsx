import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const LinkToProject = ({ name, live, github }) => {
    return (
        <div
            className="bg-gray-600 font-semibold text-white p-2 px-4 rounded-sm absolute z-10 text-base bottom-5 md:bottom-10 w-full md:w-1/2 left-1/2 -translate-x-1/2 flex justify-between items-center space-x-4"
            href={live}
            target="_blank"
            rel="noreferrer"
        >
            <p className="flex-grow text-xs md:text-sm">{name}</p>
            <a
                className="coloured-link text-base"
                href={github}
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
            <a
                className="coloured-link text-base"
                href={live}
                target="_blank"
                rel="noreferrer"
            >
                <FaExternalLinkAlt />
            </a>
        </div>
    );
};

export default LinkToProject;
