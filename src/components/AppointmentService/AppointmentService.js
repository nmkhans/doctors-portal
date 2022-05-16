import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>{slots[0]}</p>
                <p className="uppercase">{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} className="btn btn-secondary text-white font-bold mt-5">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;