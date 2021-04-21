import React, { useEffect } from 'react';
import Cover from '../home/Cover';
import About from '../home/About';
import Projects from '../home/Projects';
import '../../styles/home.scss';

export default function Home(){

    let timeline = new TimelineMax();
    let controller = new ScrollMagic.Controller();
    
    const mql = window.matchMedia('(max-width: 420px)');

    useEffect(() => {
        // Projects scroll from right if a desktop, otherwise from bottom
        mql.matches == false ?
        timeline
        .to('.background-rock', 1, {y: -75})
        .to('.background-man', 1, {y: -50}, '-=1')
        .fromTo('.background', {y: -50}, {y: 0, duration: 1}, '-=1')
        .fromTo("section.about-me",  1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone}, '-=.5')  // in from bottom
        .fromTo("section.projects", 1, {x: "130%"}, {x: "0%", ease: Linear.easeNone}) // in from right
        :
        timeline
        .to('.background-rock', 1, {y: -40})
        .to('.background-man', 1, {y: -35}, '-=1')
        .fromTo('.background', {y: -50}, {y: 0, duration: 1}, '-=1')
        .fromTo("section.about-me",  1, {y:  "85%"}, {y: "0%", ease: Linear.easeNone}, '-=1')  // in from bottom
        .fromTo("section.projects", 1, {y: "110%"}, {y: "0%", ease: Linear.easeNone}); // in from right
        
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