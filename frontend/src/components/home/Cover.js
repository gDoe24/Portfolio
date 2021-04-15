import React, { useEffect } from 'react';

export default function Cover(){

   useEffect(() => {
        window.addEventListener('scroll', function(){
            handleScrollBG('.hero-banner', window.scrollY, 1);
            handleScrollEl('.intro', window.scrollY, .4)
            handleScrollEl('.background-rock', window.scrollY, .2);
            handleScrollEl('.background-man', window.scrollY, .4);
        });
    })

    const handleScrollBG = (element, distance, speed) => {
        let item = document.querySelector(element);
        item.style.transform = `translateY(${distance * speed}px)`;
    }
    const handleScrollEl = (element, distance, speed) => {
        let item = document.querySelector(element);
        item.style.transform = `translateY(-${distance * speed}px)`;
    }

    return (
        <div className="hero-banner">
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