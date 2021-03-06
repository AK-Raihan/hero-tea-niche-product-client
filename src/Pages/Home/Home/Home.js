import React from 'react';
import ClientReview from '../../Dashboard/ClientReview/ClientReview';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;