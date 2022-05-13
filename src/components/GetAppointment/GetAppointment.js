import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import bg from './appointment.png';
import doctor from './doctor-small.png';

const GetAppointment = () => {
    const style = {
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover',
    }
    return (
        <div style={style} className="GetAppointment mt-20">
            <div className="getAppointment__content flex items-center">
                <div className="getAppointment__img flex-1 hidden lg:block">
                    <img className="w-3/4 mx-auto mt-[-100px]" src={doctor} alt="" />
                </div>
                <div className="getAppointment__detail text-white flex-1 p-20 lg:p-0">
                    <h2 className="text-secondary text-xl font-bold">Appointment</h2>
                    <h3 className="text-3xl font-semibold my-5">Make an appointment Today</h3>
                    <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ActionButton>Get Started</ActionButton>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;