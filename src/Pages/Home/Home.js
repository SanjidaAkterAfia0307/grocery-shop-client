import React from 'react';
import HomeBanner from './HomeBanner';
import Section2 from './Section2';
import Subscribe from './Subscribe';
import CustomerReview from './CustomerReview';
import Partners from './Partners';
import GetOffer from './GetOffer';

const Home = () => {
    return (
        <div className='flex flex-col gap-32'>
            <HomeBanner/>
            <Partners/>
            <Section2/>
            <GetOffer/>
            <CustomerReview/>
            <Subscribe/>
        </div>
    );
};

export default Home;