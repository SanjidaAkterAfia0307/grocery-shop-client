import React from 'react';
import HomeBanner from './HomeBanner';
import Section2 from './Section2';
import Subscribe from './Subscribe';
import CustomerReview from './CustomerReview';
import Partners from './Partners';
import GetOffer from './GetOffer';
import { FadeIn } from 'react-slide-fade-in';

const Home = () => {
    return (
        <div className='flex flex-col gap-32'>
            <HomeBanner />
            <FadeIn
                from="bottom"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={300}
            >
                <Partners />

            </FadeIn>

            <FadeIn
                from="left"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={500}
            >
                <Section2 />
            </FadeIn>
            <FadeIn
                from="right"
                positionOffset={400}
                triggerOffset={200}
                delayInMilliseconds={600}
            >
                <GetOffer />
            </FadeIn>
            <FadeIn
                from="bottom"
                positionOffset={0}
                triggerOffset={0}
                delayInMilliseconds={800}
            >
                <CustomerReview />

            </FadeIn>
            <Subscribe />
        </div>
    );
};

export default Home;