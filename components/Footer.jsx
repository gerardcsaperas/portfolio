import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="bg-black relative text-white p-40 flex justify-center">
            <div className="h-52">
                <Image src="/quote.jpg" layout="fill" alt=""></Image>
            </div>
            <p className="absolute md:text-2xl tracking-widest leading-10 p-10 md:w-[50%] text-center">
                Hard-working Full Stack Developer, fequently praised as being
                focused by my peers, I can be relied upon to help you achieve
                your goals.
            </p>
            <div className="absolute bottom-0 p-4 text-gray-500 text-center text-xs">
                <p>Made with love by Gerard Castrelo Saperas 2022</p>
            </div>
        </div>
    );
};

export default Footer;
