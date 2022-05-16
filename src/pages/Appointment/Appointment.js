import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import AvailableAppointment from '../../components/AvailableAppointment/AvailableAppointment';
import img from './chair.png';
import bg from  './bg.png';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const style = {
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    };
    return (
        <div className="Appointment">
            <div className="hero min-h-screen w-10/12 mx-auto" style={style}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div className="mr-20">
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
            <div className="appointment__box py-10">
                <AvailableAppointment date={date} />
            </div>
        </div>
    );
};

export default Appointment;