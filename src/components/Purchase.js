import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './Home/firebase.init';

const Purchase = () => {
  const inputRef = useRef()
  const nameRef=useRef();
  const emailRef=useRef();
  const addressRef=useRef();
  const phoneRef=useRef();

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
    let price=product.price;

    const input = parseInt(inputRef.current.value);
    quantity = parseInt(quantity)
    quantity = parseInt(quantity + input)

    const updatedQuantity = { quantity, availableQuantity,minimumOrder,price };


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

  const handleSubmit=(event)=>{
    event.preventDefault();
    let quantity = product.quantity;
    let availableQuantity = product.availableQuantity
    let minimumOrder=product.minimumOrder;
    let price=product.price;
    const name=nameRef.current.value;
    const email=emailRef.current.value;
    const address=addressRef.current.value;
    const phone=phoneRef.current.value;
    console.log(name,email,address,phone);
    const order={email,address,phone,price,quantity,availableQuantity,minimumOrder}
    fetch(`http://localhost:5000/order`,{
      method:'POST',
      headers:{
        'content-type':'application/json',

      },
      body:JSON.stringify(order)
    })

    .then(response=>response.json())
    .then(data=>{console.log(data);

      if(data.success){
        toast.success('Your order is done')
      }
    
    })
    event.target.reset();



  }









  return (
    <div>
      <h2>Product id:{id}</h2>
      <div className='flex justify-center items-center h-screen'>
        <div class="card w-96 bg-base-100 shadow-xl">
          <h4 className='card-body items-center text-center text-xl font-bold'><b>Product Name:</b>{product.name}</h4>

        <form onSubmit={handleSubmit}>
        <div class="card-body items-center text-center">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>

              </label>
              <input type="text" ref={nameRef} value={user?.displayName} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" readOnly disabled  />

            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>

              </label>
              <input type="text" ref={emailRef} value={user?.email} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" readOnly disabled/>

            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Address</span>

              </label>
              <input type="text" ref={addressRef}  placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

            </div>
           
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Phone No</span>

              </label>
              <input type="number" ref={phoneRef}  placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

            </div>

            
            <h4><b>Quantity:</b>{product.quantity < product?.availableQuantity && product.quantity>product.minimumOrder
              ? product.quantity : <span className='text-red-500 font-bold'>Your orders quantity will have to either more than minimum order or less than available quantity</span>}</h4>
              <h4><b>Available Quantity:</b>{product.availableQuantity}</h4>
              <h4><b>Minimum Order:</b>{product.minimumOrder}</h4>
              <h4><b>Price:</b>{product.price}</h4>
            
            <button disabled={!(product.quantity < product?.availableQuantity && product.quantity>product.minimumOrder)} class="btn btn-primary w-full max-w-xs mt-2">Button</button>

          </div>
         
        </form>



       <div className='card-body items-center text-center'>
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