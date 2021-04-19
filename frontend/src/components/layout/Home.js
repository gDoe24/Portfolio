import React from 'react';
import Cover from '../home/Cover';
import About from '../home/About';
import Projects from '../home/Projects';
import '../../styles/home.scss';

export default function Home(){

    return (
        <main>
            <Cover />
            <About />
            <Projects />
        </main>
    )
}