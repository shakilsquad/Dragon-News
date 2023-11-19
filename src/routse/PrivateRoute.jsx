import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location  = useLocation();
    console.log(location.pathname)

    if(loading){
        return <div className='w-[300px] h-[300px ] mt-[200px] m-auto'><span className="w-full loading loading-infinity  "></span></div>
    }


    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;
