import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Home/firebase.init';
import { useQuery } from 'react-query';

const MyProfile = () => {







  const nameRef = useRef();
  const emailRef = useRef();
  const eduRef = useRef();
  const locaRef = useRef()
  const phoneRef = useRef();
  const [user, loading, error] = useAuthState(auth);

  const email = user?.email;


  const { data: profile, isLoading,refetch } = useQuery('profile', () =>
  fetch(`http://localhost:5000/myprofile/${email}`).then(res =>
      res.json()
  )
)


if (isLoading) {
  return <progress class="progress w-96"></progress>
}








  


  const handleProfile = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const education = eduRef.current.value;
    const location = locaRef.current.value;
    const phone = phoneRef.current.value;
    console.log(name, email, education, location, phone);
    // const userEmail=user?.email;
    const currentuser = { name, email, education, location, phone }

    if (email) {
      fetch(`https://young-wildwood-23609.herokuapp.com/myprofile/${email}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(currentuser)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.acknowledged) {
            refetch()
            toast('Your profile has been updated successfully')
          }

        })
    }




    event.target.reset();




  }


  // const [profile,setProfile]=useState({})

  // useEffect(()=>{
  //  if(email){
  //   fetch(`http://localhost:5000/myprofile/${email}`)
  //   .then(res=>res.json())
  //   .then(data=>setProfile(data))
  //  }

  // },[email])







  return (
    <div className='flex justify-evenly items-center h-screen'>

      




          <div class="card w-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">

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
                  <input type="text" ref={eduRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

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
                  <input type="number" ref={phoneRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

                </div>


                <div class="card-body items-center text-center mt-2 ">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </form>

            </div>
          </div>





















       



      <div>

        <div class="card w-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
          
          <div class="card-body items-start text-center">
            
              
              <h2 class="card-title">Name:{profile.name}</h2>
            <h2 class="card-title">Education:{profile.education}</h2>
            <h2 class="card-title">Location:{profile.location}</h2>
            <h2 class="card-title">Phone No:{profile.phone}</h2>
              

            
           
          </div>
        </div>

      </div>










      {/* <div class="card w-96 bg-base-100 shadow-xl">
 
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
</div> */}

    </div>
  );
};

export default MyProfile;