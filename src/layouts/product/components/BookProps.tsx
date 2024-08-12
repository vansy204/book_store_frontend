/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { BookModel } from "../../../models/BookModel";

import { PictureModel } from "../../../models/PictureModel";
import { Link } from "react-router-dom";

import { getFirtPictureOfBook } from "../../../api/PictureAPI";
import renderRating from "../../utils/RatingStar";
import formatNumber from "../../utils/FormatNumber";
interface BookPropsInterface {
    Book: BookModel;
}

const BookProps: React.FC<BookPropsInterface> = (props) => {
    const bookId: number = props.Book.bookId;
    const [listPicture, setListPicture] = useState<PictureModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);

    useEffect(() => {
        getFirtPictureOfBook(bookId).then(
            pictureData => {
                setListPicture(pictureData);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        );
    }, [bookId]) // chi goi 1 lan
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
        <div className="col-md-3 mt-2" >
            <div className="card">
                <Link to={`/book/${props.Book.bookId}`} >
                    <img
                        src={pictureData}
                        className="card-img-top"
                        alt={props.Book.bookName}
                        style={{ height: '200px' }}
                    />
                </Link>
                <div className="card-body">
                    <Link to={`/book/${props.Book.bookId}`} style={{textDecoration: 'none'}}>
                        <h5 className="card-title">{props.Book.bookName}</h5>
                    </Link>
                    <div className="price row">
                        <span className="original-price col-6 text-end">
                            <del>{formatNumber(props.Book.listedPrice)}đ</del>
                        </span>
                        <span className="discounted-price col-6 text-end">
                            <strong>{formatNumber(props.Book.price)}đ</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            {renderRating(props.Book.ratings ? props.Book.ratings : 0)}
                        </div>
                        
                        <div className="col-6 text-end ">
                            <a href="#" className="btn btn-secondary btn-block me-2">
                                <i className="fas fa-heart"></i>
                            </a>
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