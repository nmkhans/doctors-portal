import React from 'react';
import './Info.css';
import InfoCard from '../InfoCard/InfoCard';
import clock from './clock.svg';
import marker from './marker.svg';
import phone from './phone.svg';

const Info = () => {
    return (
        <div className="Info grid grid-cols-3 gap-x-6 gap-y-6 p-5">
            <InfoCard icon={clock}
            bg="bg-primary"
            title="Opening Hours"
            description="Lorem Ipsum is simply dummy text of the pri"
            />
            <InfoCard
            icon={marker}
            bg="bg-accent"
            title="Visit our location"
            description="Brooklyn, NY 10036, United States"
            />
            <InfoCard
            icon={phone}
            bg="bg-primary"
            title="Contact"
            description="+000 123 456789"
            />
        </div>
    );
};

export default Info;