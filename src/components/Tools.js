import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools]=useState([])
    
    useEffect(()=>{
        fetch('https://freze-manufacture-server-production.up.railway.app/products')
        .then(response=>response.json())
        .then(data=>setTools(data))
       
    },[])

   

   
    return (
        <div id='tools' >
            <h2 className='text-center text-4xl text-primary font-bold my-28'>Tools </h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 px-16 text-center '>
                {
                    tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
            
        </div>
    );
};

export default Tools;