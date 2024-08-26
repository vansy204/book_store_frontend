import React, { useState } from "react";


const DangNhap = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin= () =>{
        const loginRequest = {
            userName: userName,
            password: password
        }
        const url:string = `http://localhost:8080/api/account/dang-nhap`
        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginRequest)
        }).then(
            (response)=>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error("Dang nhap that bai");
                }
            }
        ).then(
            (data)=>{
                // xu ly dang nhap thanh cong
                const { jwt } = data;
                //luu token vao local storage hoac cookie
                localStorage.setItem('token', jwt);
                // dieu huong den trang chinh hoac thuc hien tac vu sau dang nhap
                setError("Dang nhap thanh cong")
            }
        ).catch((error)=>{
            console.error("Dang nhap that bai: ", error);
            setError("Dang nhap that bai vui long kiem tra lai ten dang nhap va mat khau")
        });
    }
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="text" id="UserName" className="form-control form-control-lg" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                            <label className="form-label" htmlFor="text">USER NAME</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline form-white mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>
                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="button" onClick={handleLogin}>Login</button>
                                        {error && <div style={{color:"red"}}>{error}</div>}
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default DangNhap;