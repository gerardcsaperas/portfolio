import React from 'react';

const Resume = () => {
    return (
        <div className="bg-slate-50 px-10">
            {/* Education */}
            <div className="flex px-10 py-20 border-b">
                <h2 className="w-[20%]">
                    <span className="h-8 text-xl font-semibold pb-1 border-b-4 border-red-900">
                        EDUCATION
                    </span>
                </h2>
                <div className="w-[80%] leading-9">
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-5">
                            Universitat Pompeu Fabra (EUM)
                        </h3>
                        <p>
                            <em>Bachelor's in Business Administration</em>
                        </p>
                        <p>2011 - 2015</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-5">
                            FREECODECAMP
                        </h3>
                        <p>
                            <em>
                                Certificate in Full Stack Web Development,
                                Computare Software Engineering
                            </em>
                        </p>
                        <p>Apr 2020 - Sep 2020</p>
                    </div>
                </div>
            </div>
            {/* Work */}
            <div className="flex px-10 py-20 border-b">
                <h2 className="w-[20%]">
                    <span className="h-8 text-xl font-semibold pb-1 border-b-4 border-red-900">
                        WORK
                    </span>
                </h2>
                <div className="w-[80%] leading-9">
                    <div>
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold mb-5">
                                Konodrac
                            </h3>
                            <p>
                                <em>Full Stack Developer</em>
                            </p>
                            <p>Sep 2020 - Current</p>
                        </div>
                        <h3 className="text-3xl font-bold mb-5">
                            Business Administration
                        </h3>
                        <p>
                            <em>
                                More than 5 years of business administration
                                experience in several companies.
                            </em>
                        </p>
                        <p>May 2015 - Sep 2020</p>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="flex px-10 py-20">
                <h2 className="w-[20%]">
                    <span className="h-8 text-xl font-semibold pb-1 border-b-4 border-red-900">
                        SKILLS
                    </span>
                </h2>
                <div className="w-[80%] leading-9">
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-5">
                            Version Control
                        </h3>
                        <p>Git</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-5">Front End</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>React</p>
                            <p>React-Native</p>
                            <p>Preact</p>
                            <p>Redux</p>
                            <p>Redux-Zero</p>
                            <p>Next</p>
                            <p>Gatsby</p>
                            <p>Angular</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-5">Back End</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>Firebase</p>
                            <p>Elasticsearch</p>
                            <p>Redis</p>
                            <p>SQL</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-5">DevOps</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p>Docker</p>
                            <p>Ansible</p>
                            <p>Heroku</p>
                            <p>Vercel</p>
                            <p>Netlify</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
