import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './Home/firebase.init';

const SignOut = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate();
    signOut(auth);
   
    if(!user){
       
        
       
        navigate('/')

    }
    return (
        <div>
            
        </div>
    );
};

export default SignOut;