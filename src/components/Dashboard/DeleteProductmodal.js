import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductmodal = ({deleteProduct,refetch}) => {
    const{_id,name}=deleteProduct;

    const deleteproduct=(id)=>{
        fetch(`https://young-wildwood-23609.herokuapp.com/pro/${id}`,{
            method:'DELETE',
         })

         .then(response=>response.json())
         .then(data=>{
             console.log(data)
             if(data.deletedCount){
                 refetch()
                 toast.success('deleted successfully')
             }
         })
    }


    return (
        <div>
            <div>

               


                <input type="checkbox" id="deletepromodal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                    <label for="deletepromodal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg text-primary">Are you sure you wanna delete {name}</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                        <button onClick={()=>deleteproduct(_id)} className='btn btn-error btn-xs'>Delete</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default DeleteProductmodal;