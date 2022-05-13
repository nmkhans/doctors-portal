import React from 'react';
import cavity from './cavity.png';
import fluoride from './fluoride.png';
import white from './whitening.png';
import Service from './../Service/Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: white
        },
    ]

    return (
        <div className="services py-12">
            <div className="services__title text-center">
                <h2 className="text-primary text-2xl font-bold uppercase">Our services</h2>
                <h3 className="text-4xl mt-2">Services We Provide</h3>
            </div>
            <div className="services__content grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 p-10">
                {
                    services.map(service => (
                        <Service
                        key={service._id}
                        service={service}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;