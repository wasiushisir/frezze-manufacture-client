import React from 'react';
import img from '../img/refrigeration-compressor-spares-1.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} />
          <div>
            <h1 class="text-5xl font-bold">We bult our business on great cutomer service</h1>
            <p class="py-6"> At the beginning atleat but then we realized we could make a lot more money if we kinda stopped caring about you.
            Our new strategy is to write a bunch of things that look really good good in the headlines.</p>
            <button class="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;