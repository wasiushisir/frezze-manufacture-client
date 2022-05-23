import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from './Home/firebase.init';

const Purchase = () => {
  const inputRef = useRef()
  const { id } = useParams()
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [id])



  const increaseQuantity = (event) => {
    // const input=event.target.value;
    event.preventDefault();
    let quantity = product.quantity;
    let availableQuantity = product.availableQuantity
    let minimumOrder=product.minimumOrder;

    const input = parseInt(inputRef.current.value);
    quantity = parseInt(quantity)
    quantity = parseInt(quantity + input)

    const updatedQuantity = { quantity, availableQuantity,minimumOrder };


    // console.log(output);
    fetch(`http://localhost:5000/productQuantity/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedQuantity)
    })

      .then(response => response.json())
      .then(data => {
        console.log(data)

        setProduct(updatedQuantity)
        event.target.reset();

      })





  }



  return (
    <div>
      <h2>Product id:{id}</h2>
      <div className='flex justify-center items-center h-screen'>
        <div class="card w-96 bg-base-100 shadow-xl">

          <div class="card-body items-center text-center">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>

              </label>
              <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>

              </label>
              <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Address</span>

              </label>
              <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Phone No</span>

              </label>
              <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />

            </div>

            <h4><b>Quantity:</b>{product.quantity < product?.availableQuantity && product.quantity>product.minimumOrder
              ? product.quantity : <span className='text-red-500 font-bold'>Your orders quantity will have to either more than minimum order or less than available quantity</span>}</h4>
            <form onSubmit={increaseQuantity}>
              <div class="form-control">


                <label class="label">
                  <span class="label-text">Enter amount</span>
                </label>
                <label class="input-group">
                  <input ref={inputRef} type="text" class="input input-bordered" />

                </label>
              </div>
              <p className='mt-2'><span><button class="btn btn-outline btn-success">Button</button></span ></p>

            </form>

          </div>
        </div>


      </div>




    </div>
  );
};

export default Purchase;