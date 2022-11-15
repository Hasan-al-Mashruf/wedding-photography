import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { contextProvider } from '../../Context/Context';

const Secured = ({ children }) => {
    const { user, loading } = useContext(contextProvider)
    const location = useLocation();

    if (loading) {
        return <h2 className='text-center mt-5'>
            <div className="badge badge-xs"></div>
            <div className="badge badge-sm"></div>
            <div className="badge badge-md"></div>
            <div className="badge badge-lg"></div>
        </h2>
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;

};

export default Secured;