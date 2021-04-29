import React from 'react';

export default function About(){
    return (
        <section className="about-container">
            <div className="about-me">
                <div className="about-info">
                    <span>About Me</span>
                    <h2>Greg Keel <br/> Software Developer</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
            <div className="skills-container">
                <div className="skills">
                    <span>Skills</span>
                    <div className="skills-table">
                        <ul className="skills-list-1">
                            <li>HTML</li>
                            <li>CSS/SASS</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                        <ul className="skills-list-2">
                            <li>Git</li>
                            <li>Test-Driven Development</li>
                            <li>Flask/Django</li>
                            <li>PostGresQl</li>
                            <li>RESTful</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}