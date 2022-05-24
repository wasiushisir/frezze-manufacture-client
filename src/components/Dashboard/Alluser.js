import React from 'react';
import { useQuery } from 'react-query';

const Alluser = () => {

    const { data:users, isLoading, } = useQuery('users', () =>
    fetch('http://localhost:5000/user').then(res =>
      res.json()
    )
  )

  if(isLoading){
    return <progress class="progress w-96"></progress>
  }



    return (
        <div>
            <h2>all user:{users?.length}</h2>
            
        </div>
    );
};

export default Alluser;