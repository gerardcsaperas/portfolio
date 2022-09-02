import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="h-screen relative">
            <div>
                <Image src="/hero.jpg" layout="fill" objectFit="cover"></Image>
            </div>
            <div className="absolute top-44 text-white flex flex-col items-center w-full">
                <div className="w-[80%] md:w-[800px] p-10 text-center">
                    <h1 className="text-4xl font-bold mb-7">
                        Hi, it's Gerard.
                    </h1>
                    <p className="text-xl font-thin pb-7 border-b border-slate-700">
                        Full Stack Software Developer by day, founder and
                        freelancer by night.
                    </p>
                    <div className="mt-7 flex justify-center space-x-5 text-3xl">
                        <a
                            href="https://github.com/gerardcsaperas"
                            target="_blank"
                            rel="noopener"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gerardcastrelosaperas"
                            target="_blank"
                            rel="noopener"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
