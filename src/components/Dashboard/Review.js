import React, { useEffect, useState } from 'react';

const Review = () => {
   
    const [reviews,setReview]=useState([])
    useEffect(()=>{
        fetch(`https://young-wildwood-23609.herokuapp.com/review`)
        .then(response=>response.json())
        .then(data=>setReview(data))
    },[])
    return (
        
       <div>
           <h2 className='text-center text-primary text-4xl font-bold my-8'>Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            {
                reviews.map(review=><div class="card  bg-base-200 shadow-xl">
               
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Rating:{review.rating}</h2>
                  <p>Review:{review.review}</p>
                  
                </div>
              </div>)


            }
            
        </div>
       </div>
    );
};

export default Review;