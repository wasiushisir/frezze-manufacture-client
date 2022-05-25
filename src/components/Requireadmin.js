import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import auth from './Home/firebase.init';
import { signOut } from 'firebase/auth';

const Requireadmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminloading]=useAdmin(user)
    const location=useLocation();

    if( loading || adminloading){

      
           return <progress class="progress w-96"></progress>
       
    }


    if(!user || !admin){
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default Requireadmin;