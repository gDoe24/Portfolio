import React from 'react';
import img1 from '../../assets/myVids.png'

export default function Projects(){

    
    const array = [{
            "id": 0,
            "title": "MyVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
            {
            "id": 1,
            "title": "MyVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
            {
            "id": 2,
            "title": "MyVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
            {
            "id": 3,
            "title": "MyVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
        ]

    return (
        <section className="projects-container">
            <div className="projects">
                <div className="project-title">
                    <span>Projects</span>
                </div>
                {array.map((project, idx) => {
                    return(
                        <div 
                            className="project-card"
                            id={`project-${idx}`}
                            key={`project-${idx}`}>
                            <div className="card-img-cont">
                                <img src={project.backdrop} />
                            </div>
                            <div className="card-info">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-overview">{project.description}</p>
                            </div>
                            <div className="card-links">
                                <a className="project-link" href="#">
                                    Project
                                </a>
                                <a  className="github-link" href="#">
                                    Github
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}