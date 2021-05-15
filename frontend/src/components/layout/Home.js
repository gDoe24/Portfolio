import React, { useEffect, useState } from 'react';
import Cover from '../home/Cover';
import About from '../home/About';
import Projects from '../home/Projects';
import '../../styles/home.scss';
import '../../styles/main.scss';
import Footer from './Footer';

export default function Home(){

    let timeline = new TimelineMax();
    let controller = new ScrollMagic.Controller();
    
    const mql = window.matchMedia('(max-width: 420px)');

    const [extraSpace, setExtraSpace] = useState(undefined)

    useEffect(() => {
        let projectSect = document.querySelector('.projects');
        let wH = window.innerHeight;
        setExtraSpace((projectSect.offsetHeight - wH) + (wH * .3))

        window.addEventListener("resize", function(){
            projectSect = document.querySelector('.projects');
            wH = window.innerHeight;
            setExtraSpace((projectSect.offsetHeight - wH) + (wH * .3));
        })

        mql.matches == false ?
        timeline
        .to('.background-rock', 1, {y: -75})
        .to('.background-man', 1, {y: -50}, '-=1')
        .fromTo('.background', {y: -50}, {y: 0, duration: 1}, '-=1')
        .fromTo("section.about-container",  1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone}, '-=.75')  // in from bottom
        .fromTo("section.projects-container", 1, {y: "110%"}, {y: "0%", ease: Linear.easeNone}) // in from bottom
        .to("section.about-container .blackout", 1, {opacity: 1}, '-=.9')
        .to("section .projects", 1, {y: `-${extraSpace}px`, ease: Linear.easeNone})
        .fromTo("section.footer-container", 1, {y:  "110%"}, {y: "80%", ease: Linear.easeNone})
        :
        timeline
        .to('.background-rock', 1, {y: -40})
        .to('.background-man', 1, {y: -35}, '-=1')
        .fromTo('.background', {y: -50}, {y: 0, duration: 1}, '-=1')
        .fromTo("section.about-container",  1, {y:  "85%"}, {y: "0%", ease: Linear.easeNone}, '-=1')  // in from bottom
        .fromTo("section.projects-container", 1, {y: "120%"}, {y: "0%", ease: Linear.easeNone})
        .to("section.about-container .blackout", 1, {opacity: 1}, '-=.8')
        .to("section .projects", 1, {y: `-${extraSpace}px`, ease: Linear.easeNone})
        .fromTo("section.footer-container", 1, {y:  "110%"}, {y: "80%", ease: Linear.easeNone}); 
        
        let scene = new ScrollMagic.Scene({
            triggerElement: ".home-container",
            triggerHook: "onLeave",
            duration: "400%",
        })
        .setTween(timeline)
        .setPin(".home-container")
        .addTo(controller)
    },[extraSpace])

    return (
        <div className="home-container">
            <Cover />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}