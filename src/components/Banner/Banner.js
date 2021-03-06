import React from 'react';
import img from './chair.png';
import ActionButton from './../ActionButton/ActionButton';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="hero min-h-screen">
                <div className="hero-content w-10/12 flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here.</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <ActionButton>Get Started</ActionButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;