import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => (
        fetch('http://localhost:5000/users')
            .then(res => res.json())
    ));

    if(isLoading) {
        return <h3>Loading</h3>
    }

    return (
        <div>
            <h1>All Users {users.length}</h1>
        </div>
    );
};

export default AllUsers;