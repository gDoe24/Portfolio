import React, { useEffect } from 'react';
import BG from "../../../public/BG.png";
import rock from "../../../public/rock.png";
import man from "../../../public/man.png";


export default function Cover(){

    const t1 = gsap.timeline();

    return (
        <div 
            className="hero-banner">
            <div className="intro">
                <h2 id="name">My Name is Greg</h2>
                <h3 id="developer">Software Developer</h3>
                <h1 id="welcome">Welcome to My Portfolio</h1>
            </div>
            <span className="overlay"/>
            <img 
                className="background"
                alt="background"
                src={BG}/>
            <img 
                className="background-rock"
                alt="background rock"
                src={rock}/>
            <img 
                className="background-man"
                alt="background man"
                src={man}/>
        </div>
    )
}