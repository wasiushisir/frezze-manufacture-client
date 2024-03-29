import React, { useEffect, useState } from 'react';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Home/firebase.init';
import DeleteModal from './DeleteModal';

const MyOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const [order,setOrder]=useState([])
    const [modal,setModal]=useState(null);
    const email=user?.email;
    useEffect(()=>{
        if(email){
            fetch(`https://freze-manufacture-server-production.up.railway.app/myorder?email=${email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(response=>response.json())
            .then(data=>setOrder(data))

        }
    },[user])
  
       
    
   

    return (
        <div>
            <h2>My order:{order?.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Product Name</th>
        <th>Button</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>

        {
            order.map((o,index)=> <tr>
                <th>{index+1}</th>
                <td>{o.email}</td>
                <td>{o.productName}</td>
                <td>{
                     <label onClick={() => setModal(o)} for="delete-modal" class="btn btn-xs btn-error">Delete</label>}</td>
                     <td>
                        {(o.price&& !o.paid)&&<Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                        {(o.price&&o.paid)&& <><p><span className='text-success'>paid</span></p>
                        <p>Traansaction Id:<span className=''>{o.transactionId}</span></p>
                        </>}
                        </td>
              </tr>)
        }
      
     
     
     
     
     
    </tbody>
  </table>
  {
      modal&&<DeleteModal o={modal} order={order} setOrder={setOrder} ></DeleteModal>
  }
</div>
  
            
        </div>
    );
};

export default MyOrder;