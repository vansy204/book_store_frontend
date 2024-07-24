import React from "react";


export function Banner(){
    return(
        <div className="p-2 mb-4 bg-dark">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center" >
                <div>
                    <h3 className="display-2 fw-bold">
                        Sách là kho tàng kiến thức của nhân loại
                    </h3>
                    <button className="btn btn-primary btn-lg text=while float-end">Khám phá sách tại đây</button>
                </div>
            </div>
        </div>
    );
}