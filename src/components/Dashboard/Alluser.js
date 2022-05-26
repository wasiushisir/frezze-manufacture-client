import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Alluser = () => {

    const { data:users, isLoading, refetch} = useQuery('users', () =>
    fetch('https://young-wildwood-23609.herokuapp.com/user',{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json()
    )
  )

  if(isLoading){
    return <progress class="progress w-96"></progress>
  }


  const makeadmin=(email)=>{

    fetch(`https://young-wildwood-23609.herokuapp.com/user/admin/${email}`,{
        method:'PUT',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    })

    .then(response=>{
        if(response.status===403){
            toast.error('cant make an admin')
        }
       return response.json()})
    .then(data=>{console.log(data)
       
        if(data.modifiedCount>0)
        {
            refetch();
            toast.success('Make an admin successfully')

        }
       
    
    })

  }



    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Button</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>

        {
            users.map((user,index)=> <tr>
                <th>{index+1}</th>
                <td>{user.email}</td>
                <td>{user.role!=='admin'&&<button onClick={()=>makeadmin(user?.email)} className='btn btn-xs btn-success'>Make Admin</button>}</td>
                <td>Blue</td>
              </tr>)
        }
     
     
    
     
     
      
    </tbody>
  </table>
</div>
           
            
        </div>
    );
};

export default Alluser;