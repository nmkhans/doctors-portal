import React from 'react';

const AppointmentService = ({service}) => {
    const {name, slots} = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p>{slots[0]}</p>
                <p className="uppercase">{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary text-white font-bold mt-5">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;