import React from 'react';
import { useQuery } from 'react-query';
import UsersTable from './../UsersTable/UsersTable';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => (
        fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    localStorage.removeItem('accessToken');
                    signOut(auth);
                }
                return res.json();
            })
    ));

    if (isLoading) {
        return <h3>Loading</h3>
    }

    return (
        <div>
            <h3 className='text-2xl my-5'>All users</h3>
            <UsersTable users={users} refetch={refetch} />
        </div>
    );
};

export default AllUsers;