import React from 'react';
import Banner from '../Components/Header/Banner';
import Slides from '../Components/Header/Slides';
import WhyRent from '../Components/homeLayout/WhyRent';
import TopCars from '../Components/homeLayout/TopCars';
import Feedback from '../Components/homeLayout/Feedback';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Slides></Slides>

<h2>this is home</h2>

            <WhyRent></WhyRent>
            <TopCars></TopCars>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;
