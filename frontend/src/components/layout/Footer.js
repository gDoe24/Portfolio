import React from 'react';
import Link from 'react-router-dom'

export default function Footer(){
    return (
        <section className="footer-container">
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
            <div className="ftr-sect-1">
            <ul>
                <li className="myvid-link">
                    <Link to="/" >Home</Link>
                </li>
                <li className="myvid-link">
                    <Link to="/movies" >Movies</Link>
                </li>
                <li className="myvid-link">
                    <Link to="/tv" >TV Shows</Link>
                </li>
                <li className="myvid-link">
                    <Link to="/" >Login/Register</Link>
                </li>
            </ul>
            </div>
        </section>
        
    )
}