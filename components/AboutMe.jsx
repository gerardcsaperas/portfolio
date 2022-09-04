import React from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <div id="about" className="bg-gray-700 h-96 flex">
            <div className="py-14 pl-32">
                <Image
                    className="rounded-full"
                    src="/avatar.jpeg"
                    width="200"
                    height="200"
                ></Image>
            </div>
            <div className="py-10 px-20 text-gray-400 leading-7">
                <h2 className="text-white font-bold my-5">About Me</h2>
                <p>
                    My name is Gerard, I'm a Full Stack Developer. Currently I'm
                    working at Konodrac while also developing some freelance and
                    personal projects.
                </p>
                <div className="flex space-x-20">
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
                            <div className="flex items-center space-x-2">
                                <FaDownload />
                                <p>Download Resume</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
