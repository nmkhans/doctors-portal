import React from 'react';
import quoat from './quote.svg';
import Review from './../Review/Review';
import img1 from './people1.png';
import img2 from './people2.png';
import img3 from './people3.png';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "California",
            img: img1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 2,
            name: "Winson Herry",
            location: "California",
            img: img2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 3,
            name: "Winson Herry",
            location: "California",
            img: img3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <div className="Testimonials py-14 px-10">
            <div className="testimonials__title flex justify-between items-center">
                <div className="testimonial__title__text">
                    <h2 className="text-primary text-xl font-bold">Testimonial</h2>
                    <h3 className="text-4xl font-semibold mt-3">What Our Patients Says</h3>
                </div>
                <div className="testimonial__title__quoat">
                    <img className="w-24 lg:w-48" src={quoat} alt="" />
                </div>
            </div>
            <div className="testimonials__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Testimonials;