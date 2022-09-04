import React from 'react';

const Resume = () => {
    return (
        <div id="resume" className="bg-slate-50 px-10">
            {/* Education */}
            <div className="skill-block border-b">
                <h2 className="skill-title">
                    <span className="text-skill-title">EDUCATION</span>
                </h2>
                <div className="skill-facts">
                    <div className="mb-10">
                        <h3 className="fact-title">
                            Universitat Pompeu Fabra (EUM)
                        </h3>
                        <p>
                            <em>Bachelor's in Business Administration</em>
                        </p>
                        <p>2011 - 2015</p>
                    </div>
                    <div>
                        <h3 className="fact-title">FREECODECAMP</h3>
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
            <div className="skill-block border-b">
                <h2 className="skill-title">
                    <span className="text-skill-title">WORK</span>
                </h2>
                <div className="skill-facts">
                    <div>
                        <div className="mb-10">
                            <h3 className="fact-title">Konodrac</h3>
                            <p>
                                <em>Full Stack Developer</em>
                            </p>
                            <p>Sep 2020 - Current</p>
                        </div>
                        <h3 className="fact-title">Business Administration</h3>
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
            <div className="skill-block">
                <h2 className="skill-title">
                    <span className="text-skill-title">SKILLS</span>
                </h2>
                <div className="skill-facts">
                    <div className="mb-10">
                        <h3 className="fact-title">Version Control</h3>
                        <p>Git</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="fact-title">Front End</h3>
                        <div className="dev-skills">
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
                        <h3 className="fact-title">Back End</h3>
                        <div className="dev-skills">
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
                        <h3 className="fact-title">DevOps</h3>
                        <div className="dev-skills">
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
