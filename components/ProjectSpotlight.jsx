import React from 'react';
import Image from 'next/image';
import LinkToProject from './LinkToProject';
const ProjectSpotlight = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3">
            <div className="relative text-center my-7">
                <LinkToProject
                    live="https://amazon-clone-swart-pi.vercel.app/"
                    github="https://github.com/gerardcsaperas/amazon-clone"
                    name="Amazon Clone"
                />
                <Image
                    src="/amazon-clone.png"
                    width="500"
                    height="300"
                    objectFit="contain"
                    alt=""
                />
            </div>
            <div className="relative text-center my-7">
                <LinkToProject
                    live="https://linkedin-clone-gerard.web.app/"
                    github="https://github.com/gerardcsaperas/linkedin-clone"
                    name="LinkedIn Clone"
                />
                <Image
                    src="/linkedin-clone.png"
                    width="500"
                    height="300"
                    objectFit="contain"
                    alt=""
                />
            </div>
            <div className="relative text-center my-7">
                <LinkToProject
                    live="https://www.cenandoenjapon.com"
                    github="https://github.com/gerardcsaperas/cenandoenjapon"
                    name="NextJS MDX Blog"
                />
                <Image
                    src="/cenandoenjapon.png"
                    width="500"
                    height="300"
                    objectFit="contain"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ProjectSpotlight;
