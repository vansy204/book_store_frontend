import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react"

const Test = () =>{
    const [userName,setUserName] = useState<String|null>(null)
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const userData = jwtDecode(token);
            console.log(userData);
            if(userData){
                setUserName(userData.sub+"");
            }
        }
    },[]);
    return(
        <div>
            {userName && 
                <div>Xin chao, {userName}</div>
            }
        </div>
    );
    
}
export default Test;