import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const nameRef = useRef();
    const minimumRef = useRef();
    const quantityRef = useRef();
    const availRef = useRef();
    const priceRef = useRef()
    const descRef = useRef();
    const imageRef = useRef();



    const handleProduct = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const minimumOrder
        = minimumRef.current.value;
        const quantity
            = quantityRef.current.value;
        const availableQuantity
        = availRef.current.value;
        const price = priceRef.current.value;
        const shortDescription = descRef.current.value;
        const img = imageRef.current.value;
        const product={name,img,shortDescription,minimumOrder,quantity,availableQuantity,price}

        fetch('https://young-wildwood-23609.herokuapp.com/products',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(product)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                toast.success('product added successfully')
            }
        })

        

        event.target.reset();

    }






    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">

                <div class="card-body items-center text-center">
                    <h2 className='text-primary text-3xl font-bold'>Add Product</h2>
                    <form onSubmit={handleProduct}>

                        <div class=" w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input type="text" ref={nameRef} placeholder="Type here" class="input input-bordered input-primary w-72" required  />

                        </div>



                        <div class=" w-full max-w-xs ">
                            <label class="label">
                                <span class="label-text">Minimum Order</span>

                            </label>
                            <input type="number" ref={minimumRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

                        </div>


                        <div class=" w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Quantity</span>

                            </label>
                            <input type="number" ref={quantityRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

                        </div>


                        <div class=" w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Available Quantity</span>

                            </label>
                            <input type="number" ref={availRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required  />

                        </div>


                        <div class=" w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Price</span>

                            </label>
                            <input type="number" ref={priceRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

                        </div>


                        <div class=" w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Description</span>

                            </label>
                            <input type="text" ref={descRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

                        </div>

                        <div class=" w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Image</span>

                            </label>
                            <input type="text" ref={imageRef} placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" required />

                        </div>


                        <div class="card-body items-center text-center mt-2 ">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddProducts;