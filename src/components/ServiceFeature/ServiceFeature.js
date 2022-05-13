import React from 'react';
import img from './treatment.png';
import ActionButton from './../ActionButton/ActionButton';

const ServiceFeature = () => {
    return (
        <div className="hero min-h-screen pb-20">
            <div className="hero-content w-10/12 flex-col lg:flex-row justify-evenly">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className="w-6/12">
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ActionButton>Get Started</ActionButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeature;