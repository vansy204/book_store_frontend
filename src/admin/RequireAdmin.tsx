import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface jwtPayLoad{
    isAdmin: boolean;
    isStaff: boolean;
    isUser: boolean;
}
const RequireAdmin = <P extends object>(WrapperdComponet: React.ComponentType<P>) =>{
    const WithAdminCheck: React.FC<P> = (props) =>{
        const navigate = useNavigate();
        const token = localStorage.getItem('token');
        useEffect(()=>{
            // torng tinh huong chua dang nhap
        if(!token){
            navigate("/dangNhap");
            return;
        }else{
            // giai ma token
            const decodedToken = jwtDecode(token) as jwtPayLoad;
            // lay thong tin cu the
            const isAdmin = decodedToken.isAdmin;
            if(!isAdmin){
                
            }else{
                // co the viet them bao loi 403
            }
        }
        },[navigate]);
        
        return <WrapperdComponet {...props}/>
    }
    return WithAdminCheck;
}
export default RequireAdmin;