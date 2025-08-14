import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './About/AboutMe';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;