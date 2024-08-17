
import { log } from "console";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

function KichHoatTaiKhoan(){
    const {email} = useParams();
    const {activateCode} = useParams();
    const [isActivated,setIsActivated] = useState(false);
    const  [thongBao,setThongBao] = useState("");
    useEffect(()=>{
        if(email && activateCode){
            handleActivate();
        }    
    },[]);
    const handleActivate = async() =>{
    
        try{
            const url: string = `http://localhost:8080/api/account/kich-hoat?email=${email}&activateCode=${activateCode}`
            const response = await fetch(url,{method:"GET"});
            if(response.ok){
                setIsActivated(true);
            }else{
                setThongBao(response.text +"")
            }
        }catch(error){
            console.log("Loi khi kich hoat", error)
        }
       
    }
    return(
        <div>
            <h1>Kich hoat tai khoan</h1>
            {
            isActivated 
            ? (<p>tai khoan da kich hoat thanh cong,hay dang nhap de su dung dich vu</p>)
            : (<p>{thongBao}</p>)
            }
        </div>
    );
}
export default KichHoatTaiKhoan;