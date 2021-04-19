import React, { useEffect } from 'react';
import BG from "../../../public/BG.png";
import rock from "../../../public/rock.png";
import man from "../../../public/man.png";


export default function Cover(){

    
    let timeline = new TimelineMax();
    let controller = new ScrollMagic.Controller();

    useEffect(() => {
        timeline
        .to('.background-rock', 3, {y: -300})
        .to('.background-man', 3, {y: -200}, '-=3')
        .to('.background', 3, {y: 50}, '-=3')
        .to('.about-me', 3, {top: 0}, '-=3');
        let scene = new ScrollMagic.Scene({
            triggerElement: "section",
            duration: "100%",
            triggerHook: 0,
        })
        .setTween(timeline)
        .setPin(".about-me")
        .addTo(controller)
    },[])
    
    return (
        <section className="hero-banner">
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
        </section>
    )
}