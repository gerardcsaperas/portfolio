import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const LinkToProject = ({ name, live, github }) => {
    return (
        <div
            className="bg-gray-600 font-semibold text-white p-2 px-4 rounded-sm absolute z-10 text-base bottom-10 w-1/2 left-1/2 -translate-x-1/2 flex justify-between items-center space-x-4"
            href={live}
            target="_blank"
            rel="noopener"
        >
            <p className="flex-grow">{name}</p>
            <a
                className="hover:text-sky-400 transition-colors text-base"
                href={github}
                target="_blank"
                rel="noopener"
            >
                <FaGithub />
            </a>
            <a
                className="hover:text-sky-400 transition-colors text-base"
                href={live}
                target="_blank"
                rel="noopener"
            >
                <FaExternalLinkAlt />
            </a>
        </div>
    );
};

export default LinkToProject;
