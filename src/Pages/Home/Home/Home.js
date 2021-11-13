import React from 'react';
import ClientReview from '../../Dashboard/ClientReview/ClientReview';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Shop></Shop>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;