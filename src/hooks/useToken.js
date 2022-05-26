import { useEffect, useState } from "react"

const useToken=(user)=>{

    const [token,setToken]=useState('')
    useEffect(()=>{
        const email=user?.user?.email;
        const currentUser={email}
    
        if(email){
            fetch(`https://young-wildwood-23609.herokuapp.com/user/${email}`,{
    
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
        
           .then(response=>response.json())
               
                
           
            .then(data=>{console.log(data)
                const accessToken=data.token
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken);
            
            
            })

            
        }
      
    
    
    
    
    



    },[user])
   

 return[token]
}

export default useToken;