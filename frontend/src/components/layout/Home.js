import React from 'react';
import Cover from '../home/Cover';
import '../../styles/home.css';
import About from '../home/About';
import Projects from '../home/Projects'

export default function Home(){
    return (
        <main>
        <Cover />
        <About />
        <Projects />
        </main>
    )
}