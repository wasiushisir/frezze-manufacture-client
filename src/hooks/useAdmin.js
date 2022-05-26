import { useEffect, useState } from "react"
const useAdmin=(user)=>{
    const [admin,setAdmin]=useState(false)
    const [adminloading,setAdminloading]=useState(true)
    useEffect(()=>{
        const email=user?.email;
        if(email){
            fetch(`https://young-wildwood-23609.herokuapp.com/admin/${email}`,{
    
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                },
              
            })
        
           .then(response=>response.json())
               
                
           
            .then(data=>{console.log(data)
                
                
                setAdmin(data.admin);
                setAdminloading(false)
            
            
            })

            
        }
      
    

    },[user])
    return[admin,adminloading]
}
export default useAdmin;