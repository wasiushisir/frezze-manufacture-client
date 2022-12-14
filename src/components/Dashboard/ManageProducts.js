import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DeleteProductmodal from './DeleteProductmodal';

const ManageProducts = () => {
    const [deleteProduct,setDeleteProduct]=useState({})
    const { data: products, isLoading,refetch } = useQuery('products', () =>
        fetch('https://freze-manufacture-server-production.up.railway.app/products').then(res =>
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
                            <td> <label onClick={()=>setDeleteProduct(product)} for="deletepromodal" class="btn btn-error btn-xs">Delete</label>
                                </td>

                        </tr>)
                    }






                </tbody>
            </table>
            {deleteProduct&&<DeleteProductmodal deleteProduct={deleteProduct} refetch={refetch}></DeleteProductmodal>}
        </div>
    );
};

export default ManageProducts;
