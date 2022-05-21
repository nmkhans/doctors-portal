import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import AppointmentsTable from '../AppointmentsTable/AppointmentsTable';

const MyAppointments = () => {

    const [user] = useAuthState(auth);
    const { data: appointments, isLoading } = useQuery(['user-booking', user], () => (
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
    ))

    if (isLoading) {
        return <h3>Loading</h3>
    }
    console.log(appointments)

    return (
        <div>
            <h3 className='text-2xl my-5'>My Appointments</h3>
            <AppointmentsTable appointments={appointments} />
        </div>
    );
};

export default MyAppointments;