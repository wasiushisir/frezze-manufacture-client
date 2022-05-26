import React, { useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Home/firebase.init';

const MyProfile = () => {
    const nameRef=useRef();
       const emailRef=useRef();
       const eduRef=useRef();
       const locaRef=useRef()
       const phoneRef=useRef();
       const [user, loading, error] = useAuthState(auth);

       const email=user?.email;
      

    const handleProfile=(event)=>{
        event.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const education=eduRef.current.value;
        const location=locaRef.current.value;
        const phone=phoneRef.current.value;
        console.log(name,email,education,location,phone);
        // const userEmail=user?.email;
        const currentuser={name,email,education,location,phone}

        if(email){
            fetch(`https://young-wildwood-23609.herokuapp.com/myprofile/${email}`,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(currentuser)
            })
            .then(response=>response.json())
            .then(data=>{console.log(data)
                if(data.acknowledged){
                    toast('Your profile has been updated successfully')
                }
            
            })
        }

       

        
        event.target.reset();
       



    }
    return (
        <div className='flex justify-center items-center h-screen'>
           <div class="card w-96 bg-base-100 shadow-xl">
 
  <div class="card-body items-center text-center">
      <h2 className='text-primary text-3xl font-bold'>My Profile</h2>
      <form onSubmit={handleProfile}>
          
  <div class=" w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
    
  </label>
  <input type="text" ref={nameRef} value={user?.displayName} placeholder="Type here" class="input input-bordered input-primary w-72" required />
  
</div>



<div class=" w-full max-w-xs ">
  <label class="label">
    <span class="label-text">Email</span>
    
  </label>
  <input type="email" ref={emailRef} value={user?.email} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" disabled readOnly />
  
</div>


<div class=" w-full max-w-xs">
  <label class="label">
    <span class="label-text">Education</span>
    
  </label>
  <input type="text" ref={eduRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required  />
  
</div>


<div class=" w-full max-w-xs">
  <label class="label">
    <span class="label-text">Location</span>
    
  </label>
  <input type="text" ref={locaRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />
  
</div>


<div class=" w-full max-w-xs">
  <label class="label">
    <span class="label-text">Phone No</span>
    
  </label>
  <input type="number" ref={phoneRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs"required  />
  
</div>
 
    
    <div class="card-body items-center text-center mt-2 ">
      <button class="btn btn-primary">Submit</button>
    </div>
      </form>

  </div>
</div>
            
        </div>
    );
};

export default MyProfile;