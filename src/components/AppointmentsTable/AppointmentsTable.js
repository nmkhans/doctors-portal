import React from 'react';

const AppointmentsTable = ({ appointments }) => {
    return (
        <div className="AppointmentsTable">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appo => (
                                <tr key={appo._id}>
                                    <td>{appo.patientName}</td>
                                    <td>{appo.treatment}</td>
                                    <td>{appo.date}</td>
                                    <td>{appo.slot}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentsTable;