import React from 'react';
import '../../styles/main.scss';

export default function Footer(){
    return (
        <section className="footer-container">
            <div className="div-cont">
                <div className="title">
                    <h1>Greg Keel</h1>
                </div>
                <div className="ftr-sect-1">
                    <ul>
                        <li className="personal-li">
                            <a href="#">Contact</a>
                        </li>
                        <li className="personal-li">
                            <a href="#">Portfolio</a>
                        </li>
                        <li className="personal-li">
                            <a href="https://github.com/gDoe24">Github</a>
                        </li>
                    </ul>
                </div>
                <div className="ftr-sect-2">
                <ul>
                    <li className="portfolio-link">
                        <a to="#" >Home</a>
                    </li>
                    <li className="portfolio-link">
                        <a to="#" >AboutMe</a>
                    </li>
                    <li className="portfolio-link">
                        <a to="#" >Projects</a>
                    </li>
                    <li className="portfolio-link">
                        <a to="#" >Resume</a>
                    </li>
                </ul>
                </div>
            </div>
        </section>
        
    )
}