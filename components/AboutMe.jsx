import React from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <div
            id="about"
            className="bg-gray-700 md:h-96 flex flex-col items-center p-10 md:flex-row"
        >
            <div className="md:py-14 md:pl-32">
                <Image
                    className="rounded-full"
                    src="/avatar.jpeg"
                    width="200"
                    height="200"
                    alt=""
                ></Image>
            </div>
            <div className="text-gray-400 leading-7 md:mx-10">
                <h2 className="text-white font-bold my-5">About Me</h2>
                <p>My name is Gerard, I&apos;m a Full Stack Developer.</p>
                <br />
                <p>
                    Currently I&apos;m working at Konodrac while also developing
                    some freelance and personal projects.
                </p>
                <div className="md:flex space-x-20">
                    <div>
                        <h2 className="text-white font-bold my-5">
                            Contact Details
                        </h2>
                        <div>
                            <p>Gerard Castrelo Saperas</p>
                            <p>+34 667 717 567</p>
                            <p>gcsaperas@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <button className="serious-button">
                            <div className="flex items-center md:space-x-2">
                                <FaDownload />
                                <p className="ml-2">Download Resume</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
