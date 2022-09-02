import React from 'react';
import Link from 'next/link';
const Header = () => {
    return (
        <div className="fixed top-0 w-full z-10 p-2 bg-gray-800 flex justify-center space-x-5 text-white text-xs md:text-sm font-medium">
            <Link href="/#home">HOME</Link>
            <Link href="/#about">ABOUT</Link>
            <Link href="/#resume">RESUME</Link>
            <Link href="/#testimonials">TESTIMONIALS</Link>
            <Link href="/#contact">CONTACT</Link>
        </div>
    );
};

export default Header;
