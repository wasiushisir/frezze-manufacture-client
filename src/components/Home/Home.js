import React from 'react';
import About from '../About/About';
import Banner from '../Banner';
import BusinessSummary from '../BusinessSummary';
import Contactus from '../Contactus';
import Review from '../Dashboard/Review';
import Footer from '../Footer';
import Tools from '../Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <About></About>
            <Review></Review>
            <Contactus></Contactus>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;