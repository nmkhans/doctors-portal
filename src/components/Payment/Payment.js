/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useParams } from 'react-router-dom';

const payment = () => {
    const { id } = useParams();

    return (
        <div className="Payment">
            <h3>Pay for {id}</h3>
        </div>
    );
};

export default payment;