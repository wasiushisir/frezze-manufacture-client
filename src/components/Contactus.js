import React from 'react';

const Contactus = () => {
    return (
        <div class="hero min-h-screen bg-base-200 my-12">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold mx-4">Contact Us!</h1>
            <p class="py-6">Your satisfaction our acheivement.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input type="text" placeholder="subject" class="input input-bordered" />
               
              </div>

              <div class="form-control">
  <label class="label">
    <span class="label-text">Your bio</span>
   
  </label> 
  <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
 
</div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contactus;