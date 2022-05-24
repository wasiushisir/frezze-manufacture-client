import React from 'react';
import { useQuery } from 'react-query';

const ManageProducts = () => {
    const { data: products, isLoading } = useQuery('products', () =>
        fetch('http://localhost:5000/products').then(res =>
            res.json()
        )
    )


    if (isLoading) {
        return <progress class="progress w-96"></progress>
    }


    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <tr>
                            <th>{index + 1}</th>
                            <td><div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src={product.img} />
                                </div>
                            </div></td>
                            <td>{product.name}</td>
                            <td><button className='btn btn-error btn-xs'>Delete</button></td>

                        </tr>)
                    }






                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;
