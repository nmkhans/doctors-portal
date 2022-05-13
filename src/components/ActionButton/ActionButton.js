import React from 'react';

const ActionButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-scdecondary to-primary text-white font-bold">
            {children}
        </button>
    );
};

export default ActionButton;