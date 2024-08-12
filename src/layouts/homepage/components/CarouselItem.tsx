/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { BookModel } from "../../../models/BookModel";
import { getFirtPictureOfBook } from "../../../api/PictureAPI";
import { PictureModel } from "../../../models/PictureModel";
interface CarouselItemInterface {
    Book: BookModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {
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
        <div className="row align-items-center">
            <div className="col-5 text-center" >
                <img src={pictureData} className="float-end" style={{ width: '150px' }} />
            </div>
            <div className="col-7">
                <h5>{props.Book.bookName}</h5>
            </div>
        </div>
    );
}
export default CarouselItem;