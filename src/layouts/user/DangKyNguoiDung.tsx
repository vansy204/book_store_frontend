
import { log } from "console";
import React, { useState } from "react";



function DangKyNguoiDung() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [gender, setGender] = useState('1');
    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorpasswordRepeat, setErrorPasswordRepet] = useState("");
    // xu ly thong tin
    const handleSubmit = async (e: React.FormEvent) => {

    }

    //kiem tra ten dang  nhap
    const checkUserName = async (userName: string) => {
        const url = `http://localhost:8080/user/search/existsByUserName?username=${userName}`
        //call
        try {
            const response = await fetch(url);
            const data = await response.text();
            if (data === "true") {
                setErrorUserName("Ten dang nhap da ton tai");
                return true;
            }
            return false;
        } catch (error) {
            console.error("Loi khi kiem tra ten dang nhap");
            return false;
        }
    }
    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        // thay doi gia tri
        setUserName(e.target.value);
        //kiem tra
        setErrorUserName("");
        return (checkUserName(e.target.value));
    }
    //kiem tra email
    const checkEmail = async (email: string) => {
        const url = `http://localhost:8080/user/search/existsByEmail?email=${email}`
        //call
        try {
            const response = await fetch(url);
            const data = await response.text();
            if (data === "true") {
                setErrorEmail("Email da ton tai");
                return true;
            }
            return false;
        } catch (error) {
            console.error("Loi khi kiem tra email");
            return false;

        }
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        // thay doi gia tri
        setEmail(e.target.value);
        //kiem tra
        setErrorEmail("");
        return (checkEmail(e.target.value));
    }
    // kiem tra mat khau
    const checkPassword = (password: string) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorPassword("Mat khau phai co it nhat 8 ky tu va bao gom it nhat 1 ky tu dac biet (!@#$%^&*)")
            return true;
        } else {
            setErrorPassword(""); // mat khau hop le
            return false;
            
        }
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        // thay doi gia tri
        setPassword(e.target.value);
        //kiem tra
        console.log(checkPassword(e.target.value));
        
        setErrorPassword("");
        return checkPassword(e.target.value);
    }
    // kiem tra mat khau lap lai
    const checkPasswordRepeat = (passwordRepeat: string) => {
        if(passwordRepeat !== password){
            setErrorPasswordRepet("mat khau khong trung khop")
            return true;
        }else{
            setErrorPasswordRepet("");
            return false;
        }
    }
    const handlePasswordRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
        // thay doi gia tri
        setPasswordRepeat(e.target.value);
        //kiem tra
        
        setErrorPasswordRepet("");
        return checkPasswordRepeat(e.target.value);
    }
    
    return (
        <div className="container">
            <h1 className="mt-5 text-center">Dang ky</h1>
            <div className="mb-3 col-md-6 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">ten dang nhap</label>
                        <input type="text" name="" id="userName" className="form-control" value={userName} onChange={handleUserName} />
                        <div style={{ color: "red" }}>{errorUserName}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <input type="text" name="" id="email" className="form-control" value={email} onChange={handleEmail} />
                        <div style={{ color: "red" }}>{errorEmail}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">password</label>
                        <input 
                            type="password"
                            name="" 
                            id="password" 
                            className="form-control" 
                            value={password} 
                            onChange={handlePassword} />
                        <div style={{ color: "red" }}>{errorPassword}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordRepeat" className="form-label">passwordRepeat</label>
                        <input type="password" name="" id="passwordRepeat" className="form-control" value={passwordRepeat} onChange={handlePasswordRepeat} />
                        <div style={{ color: "red" }}>{errorpasswordRepeat}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default DangKyNguoiDung;