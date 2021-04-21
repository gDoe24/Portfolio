import React, { useEffect } from 'react';
import Cover from '../home/Cover';
import About from '../home/About';
import Projects from '../home/Projects';
import '../../styles/home.scss';

export default function Home(){

    let timeline = new TimelineMax();
    let controller = new ScrollMagic.Controller();
    

    useEffect(() => {
        timeline
        .to('.background-rock', 1, {y: -75})
        .to('.background-man', 1, {y: -50}, '-=1')
        .fromTo('.background', {y: -50}, {y: 0, duration: 1}, '-=1')
        .fromTo("section.about-me",  1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone}, '-=.5')  // in from bottom
        .fromTo("section.projects", 1, {x: "130%"}, {x: "0%", ease: Linear.easeNone}); // in from right
        
        let scene = new ScrollMagic.Scene({
            triggerElement: ".container",
            triggerHook: "onLeave",
            duration: "300%",
        })
        .setTween(timeline)
        .setPin(".container")
        .addTo(controller)
    },[])

    return (
        <div className="container">
            <Cover />
            <About />
            <Projects />
        </div>
    )
}