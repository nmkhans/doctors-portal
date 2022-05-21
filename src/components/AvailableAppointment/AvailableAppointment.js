import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from '../AppointmentService/AppointmentService';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ date }) => {

    //? service State
    const [treatment, setTreatment] = useState(null);

    //? load all appointments
    const formatedDate = format(date, "PP");
    const {data: appointments, isLoading, refetch} = useQuery(['appointment', formatedDate], () => (
        fetch(`http://localhost:5000/available-slots?date=${formatedDate}`)
        .then(res => res.json())
    ));

    //? manage loading state
    if(isLoading) {
        return <h2>Loading</h2>
    }

    return (
        <div className="AvailableAppointment p-12">
            <div className="AvailableAppointment__title">
                <h4 className="text-center text-secondary text-2xl font-semibold">Available Appointments on {format(date, "PP")}</h4>
            </div>
            <div className="availableAppointment__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    appointments.map(service => <AppointmentService key={service._id} service={service} setTreatment={setTreatment} />)
                }
                {
                    treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch} />
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;