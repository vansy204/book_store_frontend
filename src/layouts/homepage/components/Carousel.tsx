/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { PictureModel } from "../../../models/PictureModel";
import { BookModel } from "../../../models/BookModel";
import { getAllPicture } from "../../../api/PictureAPI";

export function Carousel(){

    
    const [listPicture, setListPicture] = useState<PictureModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);
    for(let i =0 ;i<3;i++){
        
    }
     let bookId: number;  
    useEffect(() => {
        getAllPicture(bookId).then(
            pictureData => {
                setListPicture(pictureData);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        );
    }, []) // chi goi 1 lan
    if (loadingData) {
        return (
            <div>
                <h1>Loadding Data</h1>
            </div>
        );
    }
    if (errorRes) {
        return (
            <div>
                <h1>Error: {errorRes}</h1>
            </div>
        );
    }
    let pictureData: string = "";
    if (listPicture[0] && listPicture[0].pictureData) {
        pictureData = listPicture[0].pictureData;
    }
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center" >
                                <img src={`${pictureData[0]}`} className="float-end" style={{ width: '150px' }} />
                            </div>
                            <div className="col-7">
                                <h5>Đại Dương Đen</h5>
                                <p>Đại dương đen là một cuốn sách viết về những khủng hoảng</p>
                            </div>
                        </div>
                    </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}