import React from 'react';

export default function About(){
    return (
        <section className="about-container">
            <div className="blackout"></div>
            <div className="about-me">
                <div className="about-info">
                    <span>About Me</span>
                    <h2>Greg Keel <br/> Software Developer</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi.
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
            <svg
                className="divider" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                <path fill="#6e01c0" fill-opacity="1"
                d="M0,256L48,218.7C96,181,192,107,288,90.7C384,75,480,117,576,154.7C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </section>
    )
}