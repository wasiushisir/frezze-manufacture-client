import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const DeleteModal = ({o,order,setOrder}) => {
    console.log(o);
    const {_id}=o;

    const handleDelte=(id)=>{

        fetch(`https://young-wildwood-23609.herokuapp.com/deleteorder/${id}`,{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.deletedCount){
                console.log('deleted successfully');

                toast.error('deleted successfuly')

                const remaining=order.filter(or=>or._id!==id)

                setOrder(remaining)



            }
            


        })
  

    }
   
    return (
        <div>
            <div>

                


                <input type="checkbox" id="delete-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="text-lg font-bold">Are you sure you want to delete</h3>
                        <button onClick={()=>handleDelte(_id)} class="btn btn-xs btn-primary">Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DeleteModal;