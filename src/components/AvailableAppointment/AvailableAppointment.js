import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ date }) => {
    return (
        <div className="AvailableAppointment">
            <div className="AvailableAppointment__title">
                <h4 className="text-center text-secondary text-2xl font-semibold">Available Appointments on {format(date, "PP")}</h4>
            </div>
        </div>
    );
};

export default AvailableAppointment;