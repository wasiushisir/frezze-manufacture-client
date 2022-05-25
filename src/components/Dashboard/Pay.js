import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1bozSA9GAOwjMBe5XspjkGklhcw905SgCoaLfA8PnvnQRMvA4l8i62WstIzhSMXRk8w33KeeVb4psrzcrPwCRr00cnDqe1RC');
const Pay = () => {
    const { id } = useParams();

    const { data: orders, isLoading } = useQuery(['orders', id], () =>
        fetch(`http://localhost:5000/payment/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <progress class="progress w-96"></progress>
    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mt-6">

                <div class="card-body items-center text-center">
                    <p>Hello {orders.email}</p>
                    <h2 className='card-title text-primary text-2xl'>pay for {orders.productName}</h2>
                    <h4>Please pay ${orders.price}</h4>


                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl mt-6">

                <div class="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  orders={orders}/>
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Pay;