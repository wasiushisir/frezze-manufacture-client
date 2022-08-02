import React, { useEffect, useState } from 'react';

const Review = () => {

  const [reviews, setReview] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then(response => response.json())
      .then(data => setReview(data))
  }, [])
  return (

    <div>
      <h2 className='text-center text-primary text-4xl font-bold my-8'>Review</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  px-16 text-center '>
        {
          reviews.map(review => <div class="card  bg-base-200 shadow-xl">

            <div class="card-body items-center text-center">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img src={review.rating} />
                </div>
              </div>
              {/* <h2 class="card-title">Rating:{review.rating}</h2> */}
              <p>{review.review}</p>
              <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400  " checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
              </div>

            </div>
          </div>)


        }

      </div>
    </div>
  );
};

export default Review;