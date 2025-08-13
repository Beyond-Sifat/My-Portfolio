import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './About/AboutMe';

const Home = () => {
    return (
        <div id='home' className=''>
            <Banner></Banner>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;