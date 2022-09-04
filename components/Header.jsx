import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className="fixed top-0 w-full z-10 p-2 bg-gray-800 flex justify-center space-x-5 text-white text-xs md:text-sm font-medium">
            <Link
                className="cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
            >
                HOME
            </Link>
            <Link
                className="cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
            >
                ABOUT
            </Link>
            <Link
                className="cursor-pointer"
                to="resume"
                smooth={true}
                duration={500}
            >
                RESUME
            </Link>
            <Link
                className="cursor-pointer"
                to="projects"
                smooth={true}
                duration={500}
            >
                PROJECTS
            </Link>
        </div>
    );
};

export default Header;
