import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const naviagte=useNavigate();
    // console.log(tool);
    const{img,name,shortDescription,minimumOrder,quantity,availableQuantity,price,_id}=tool

    const handleBuy=(id)=>{
     naviagte(`/purchase/${id}`)
     

    }



    return (
        <div class="card  bg-base-100 shadow-xl sm:text-center  hover:scale-110 transition-all duration-300  ">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl w-16 md:w-32 lg:w-48" />
  </figure>
  <div class="card-body items-center text-center bg-base-200">
    <h2 class=" my-0"><b>Name:</b>{name}</h2>
    {/* <p className='my-0'><b>Description</b>{shortDescription}</p> */}
   
    {/* <h4><b>MinimumOrder</b>{minimumOrder}</h4>
    <h4><b>quantity</b>{quantity}</h4>
    <h4><b>availableQuantity</b>{availableQuantity}</h4> */}
    <h4><b>Price</b>{price}</h4>
    <p><b>Description:</b>{shortDescription}</p>
    <div class="card-actions">
      <button onClick={()=>handleBuy(_id)} class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;