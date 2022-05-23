import React from 'react';

const DoctorTable = ({ doctor }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Avater</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctor?.map(doc => (
                                <tr key={doc._id}>
                                    <td><img className="w-[80px] rounded" src={doc.img} alt="" /></td>
                                    <td>{doc.email}</td>
                                    <td>{doc.name}</td>
                                    <td>{doc.speciality}</td>
                                    <td><button className="btn btn-sm">Remove doc</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorTable;