import React from 'react';
import { toast } from 'react-toastify';

const UsersTable = ({ users, refetch }) => {

    const handleRole = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('role update successfull')
            })
    }

    return (
        <div className="UsersTable">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td>{(user.role !== 'admin') && (<button onClick={() => handleRole(user.email)} className="btn btn-sm">Make Admin</button>)}</td>
                                    <td><button className="btn btn-sm">Remove User</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;