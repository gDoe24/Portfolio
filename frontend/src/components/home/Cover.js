import React, { useEffect } from 'react';

export default function Cover(){


    const handleScrollBG = (element, yPos) => {
        let item = document.querySelector(element);
        item.style.transform = `translateY(${yPos}px)`;
    }
    const handleScrollEl = (element, yPos,) => {
        let item = document.querySelector(element);
        item.style.transform = `translateY(-${yPos}px)`;
    }

    let yScrollPosition;

    function scrollLoop(){
        
        yScrollPosition = window.pageYOffset;
        handleScrollBG('.hero-banner', yScrollPosition * 1);
        handleScrollEl('.intro', yScrollPosition * .6);
        handleScrollEl('.background-rock', yScrollPosition * .6);
        handleScrollEl('.background-man', yScrollPosition * .4);

        requestAnimationFrame(scrollLoop);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", scrollLoop);
    })

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
                src={`${process.env.PUBLIC_URL}/BG.png`}/>
            <img 
                className="background-rock"
                alt="background rock"
                src={`${process.env.PUBLIC_URL}/rock.png`}/>
            <img 
                className="background-man"
                alt="background man"
                src={`${process.env.PUBLIC_URL}/man.png`}/>
        </div>
    )
}