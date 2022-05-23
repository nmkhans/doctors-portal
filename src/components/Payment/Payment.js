/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe(`pk_test_51L2T8gA0AzwDwvLYT6BvQrr4Lwmwwg1XF3OtDtrSbyUs0XnQw2epH0WdGR6FM2UrBZmBRZbbwsRENw77njlRJ1xr00ugasX5LN`);

const payment = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery(['booking', id], () => (
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
    ))
    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div className="Payment">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <span>Hello {data.patientName}</span>
                            <h3 className="card-title">Pay for {data.treatment}</h3>
                            <p>Your Appointment: {data.date} at {data.slot}</p>
                            <p>Please play ${data.price}</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={data} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default payment;