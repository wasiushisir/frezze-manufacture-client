import React from 'react';

const Tool = ({tool}) => {
    // console.log(tool);
    const{img,name,shortDescription,minimumOrder,quantity,availableQuantity,price}=tool
    return (
        <div class="card w-96 bg-base-100 shadow-xl sm:text-center">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center bg-base-200">
    <h2 class="card-title">{name}</h2>
    <p><b>Description</b>{shortDescription}</p>
    <h4><b>MinimumOrder</b>{minimumOrder}</h4>
    <h4><b>quantity</b>{quantity}</h4>
    <h4><b>availableQuantity</b>{availableQuantity}</h4>
    <h4><b>Price</b>{price}</h4>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;