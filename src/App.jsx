import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./components/Style.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Experience />
            <Project />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
