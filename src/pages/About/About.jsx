import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navber/Navbar';
import BreakingNews from '../Home/BreakingNews';

const About = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center">This is A About section</h1>
        </div>
    );
};

export default About;