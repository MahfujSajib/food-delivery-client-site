import React from 'react';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import OurGoal from './OurGoal/OurGoal';
import Partners from './Partners/Partners';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
            <Partners></Partners>
            <OurGoal></OurGoal>
        </div>
    );
};

export default Home;