import React from 'react';
import img1 from '../../assets/myVids.png'

export default function Projects(){

    
    const array = [{
            "id": 0,
            "title": "myVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
            {
            "id": 1,
            "title": "myVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
            {
            "id": 2,
            "title": "myVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
            {
            "id": 3,
            "title": "myVids Plus",
            "backdrop": img1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "github": "#",
            "website" :"#"
            },
        ]

    return (
        <section className="projects-container">
            <div className="projects">
                {array.map((project, idx) => {
                    return(
                        <div 
                            className="project-card"
                            id={`project-${idx}`}
                            key={`project-${idx}`}>
                            <h3 className="card-title">{project.title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}