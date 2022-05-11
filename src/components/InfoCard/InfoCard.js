import React from 'react';

const InfoCard = ({icon, bg, title, description}) => {
    return (
        <div className={`card lg:card-side ${bg} shadow-xl py-2.5 px-5`}>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;