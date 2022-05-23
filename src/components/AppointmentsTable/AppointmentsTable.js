import React from 'react';
import { Link } from 'react-router-dom';

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map(appo => (
                                <tr key={appo._id}>
                                    <td>{appo.patientName}</td>
                                    <td>{appo.treatment}</td>
                                    <td>{appo.date}</td>
                                    <td>{appo.slot}</td>
                                    <td>
                                        {(appo.price && !appo.paid) && <Link className="btn btn-sm btn-success text-white" to={`/dashboard/payment/${appo._id}`}>Pay</Link>}
                                        {(appo.price && appo.paid) && <span className="text-success">Paid</span>}
                                    </td>
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