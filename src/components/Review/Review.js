import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, description } = review;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="card__profile flex mt-5">
                    <div className="card__avater">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card__detail">
                        <h3 className="font-bold">{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;