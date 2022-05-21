import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyAppointments = () => {

    const [user] = useAuthState(auth);
    const { data: appointments, isLoading, refetch } = useQuery(['user-booking', user], () => (
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
    ))

    if (isLoading) {
        return <h3>Loading</h3>
    }

    return (
        <div>
            <h3>This is my appointment</h3>
        </div>
    );
};

export default MyAppointments;