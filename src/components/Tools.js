import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools]=useState([])
    useEffect(()=>{
        fetch('tools.json')
        .then(response=>response.json())
        .then(data=>setTools(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-4xl text-primary font-bold my-28'>Tools :{tools.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {
                    tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
            
        </div>
    );
};

export default Tools;