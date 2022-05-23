import React from 'react';
import { useQuery } from 'react-query';
import DoctorTable from '../DoctorTable/DoctorTable';

const ManageDoctor = () => {
    const {data: doctor, isLoading} = useQuery('doctor', () => (
        fetch('http://localhost:5000/doctor')
        .then(res => res.json())
    ));

    if(isLoading) {
        return <h3>Loading</h3>
    }

    console.log(doctor)

    return (
        <div className="ManageDoctor">
            <h3 className='text-2xl my-5'>Manage Doctor</h3>
            <DoctorTable doctor={doctor} />
        </div>
    );
};

export default ManageDoctor;