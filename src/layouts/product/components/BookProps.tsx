/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { BookModel } from "../../../models/BookModel";
import { getAllPicture } from "../../../api/PictureAPI";
import { PictureModel } from "../../../models/PictureModel";
interface BookPropsInterface{
    Book: BookModel;
}

const BookProps: React.FC<BookPropsInterface> = (props) =>{
    const bookId: number = props.Book.bookId;
    const [listPicture,setListPicture] = useState<PictureModel[]>([]);
    const [loadingData,setLoadingData] = useState(true);
    const [errorRes,setError] = useState(null);

    useEffect(() =>{
        getAllPicture(bookId).then(
            pictureData => {
                setListPicture(pictureData);
                setLoadingData(false);
            }
        ).catch(
            error =>{
                setError(error.message);
            }
        );
    },[]) // chi goi 1 lan
    if(loadingData){
        return(
            <div>
                <h1>Loadding Data</h1>
            </div>
        );
    }
    if(errorRes){
        return(
            <div>
                <h1>Error: {errorRes}</h1>
            </div>
        );
    }
    let pictureData: string ="";
    if(listPicture[0] && listPicture[0].pictureData){
        pictureData = listPicture[0].pictureData;
    }
    return(
        <div className="col-md-3 mt-2" >
            <div className="card">
            <img 
                src={pictureData}
                className="card-img-top"
                alt={props.Book.bookName}
                style={{height:'200px'}}
            />
                <div className="card-body">
                    <h5 className="card-title">{props.Book.bookName}</h5>
                    <p className="card-text">{props.Book.desciption}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.Book.listedPrice}</del>
                        </span>
                        <span className="price">
                            <strong>{props.Book.price}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default BookProps;