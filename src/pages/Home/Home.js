import React from 'react';
import Banner from './../../components/Banner/Banner';
import Info from './../../components/Info/Info';
import Services from './../../components/Services/Services';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Info />
            <Services />
        </div>
    );
};

export default Home;