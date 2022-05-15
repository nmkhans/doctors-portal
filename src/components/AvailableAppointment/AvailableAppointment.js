import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ date }) => {

    //? service State
    const [services, setServices] = useState([]);

    //? load all services
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-75/main/public/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    console.log(services)

    return (
        <div className="AvailableAppointment">
            <div className="AvailableAppointment__title">
                <h4 className="text-center text-secondary text-2xl font-semibold">Available Appointments on {format(date, "PP")}</h4>
            </div>
            <div className="availableAppointment__content">

            </div>
        </div>
    );
};

export default AvailableAppointment;