import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaArrowAltCircleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div id="home" className="h-screen relative bg-black">
            <div>
                <Image
                    src="/hero.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                ></Image>
            </div>
            <div className="absolute top-44 text-white flex flex-col items-center w-full">
                <div className="w-[80%] md:w-[800px] p-10 text-center">
                    <h1 className="text-4xl font-bold mb-7">
                        Hi, it&apos;s Gerard.
                    </h1>
                    <p className="text-xl font-thin pb-7 border-b border-slate-700">
                        Full Stack Software Developer by day, founder and
                        freelancer by night.
                    </p>
                    <div className="mt-7 flex justify-center space-x-5 text-3xl">
                        <a
                            className="coloured-link"
                            href="https://github.com/gerardcsaperas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="coloured-link"
                            href="https://www.linkedin.com/in/gerardcastrelosaperas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-5 w-full flex justify-center">
                <Link
                    className="cursor-pointer text-white coloured-link text-3xl"
                    to="about"
                    smooth={true}
                    duration={500}
                >
                    <FaArrowAltCircleDown />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
