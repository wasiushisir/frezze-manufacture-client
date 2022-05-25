import React from 'react';
import About from '../About/About';
import Banner from '../Banner';
import BusinessSummary from '../BusinessSummary';
import Tools from '../Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <About></About>
            
        </div>
    );
};

export default Home;