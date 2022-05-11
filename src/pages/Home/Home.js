import React from 'react';
import ServiceFeature from '../../components/ServiceFeature/ServiceFeature';
import Banner from './../../components/Banner/Banner';
import Info from './../../components/Info/Info';
import Services from './../../components/Services/Services';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Info />
            <Services />
            <ServiceFeature />
        </div>
    );
};

export default Home;