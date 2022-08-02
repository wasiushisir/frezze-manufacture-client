import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const MyReview = () => {

    const retingRef=useRef();
    const reviewRef=useRef();

    const handleReview=(event)=>{
        event.preventDefault();
        const rating=retingRef.current.value;
        const review=reviewRef.current.value;
        console.log(rating,review);
        const userReview={rating,review}
        fetch(`https://young-wildwood-23609.herokuapp.com/review`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userReview)
        })

        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                toast.success('Your review is posted successfully')
            }
        })
        event.target.reset();

    }


    return (
        <div className='flex justify-center items-center h-screen'>
           <div class="card w-96 bg-base-100 shadow-xl">
 
  <div class="card-body items-center text-center">
<form onSubmit={handleReview}>
<div>


<label class="label">
  <span class="label-text">Enter Image</span>
</label>
<label class="input-group">
  <input ref={retingRef}  type="text" class="input input-bordered" />

</label>
</div>
    <textarea class="textarea textarea-primary mt-2" ref={reviewRef} placeholder='Add Review' ></textarea>
    <div class="card-body items-center text-center">
      <button class="btn btn-primary mt-2 ">Add Review</button>
    </div>
</form>


  </div>
</div>
            
        </div>
    );
};

export default MyReview;