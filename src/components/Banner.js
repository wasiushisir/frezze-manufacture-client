import React from 'react';
import img from '../img/refrigeration-compressor-spares-1.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;