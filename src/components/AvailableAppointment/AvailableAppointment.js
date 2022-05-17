import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from '../AppointmentService/AppointmentService';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ date }) => {

    //? service State
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    //? load all services
    useEffect(() => {
        fetch('http://localhost:5000/appointment')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="AvailableAppointment p-12">
            <div className="AvailableAppointment__title">
                <h4 className="text-center text-secondary text-2xl font-semibold">Available Appointments on {format(date, "PP")}</h4>
            </div>
            <div className="availableAppointment__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    services.map(service => <AppointmentService key={service._id} service={service} setTreatment={setTreatment} />)
                }
                {
                    treatment && <BookingModal date={date} treatment={treatment} />
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;