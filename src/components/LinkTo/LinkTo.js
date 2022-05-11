import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

const LinkTo = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className={match ? "nav__active" : "nav__link"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default LinkTo;