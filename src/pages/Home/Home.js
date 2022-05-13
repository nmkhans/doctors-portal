import React from 'react';
import GetAppointment from '../../components/GetAppointment/GetAppointment';
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
            <GetAppointment />
        </div>
    );
};

export default Home;