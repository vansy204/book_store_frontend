/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { PictureModel } from "../../../models/PictureModel";
import { getAllPicture, getFirtPictureOfBook } from "../../../api/PictureAPI";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
interface ProductPictureInterface {
    bookId: number;
}

const ProductPicture: React.FC<ProductPictureInterface> = (props) => {
    const bookId: number = props.bookId;
    const [listPicture, setListPicture] = useState<PictureModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);
    useEffect(() => {
        getAllPicture(bookId).then(
            listPictureData => {
                setListPicture(listPictureData);
                
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
    return(
        <div className="row">
           <div className="col-12">
            <Carousel showArrows={true} showIndicators={true}>
                {
                    listPicture.map((hinhAnh,index) =>(
                        <div key={index} >
                            <img src={hinhAnh.pictureData} alt={hinhAnh.pictureName} style={{maxWidth:"250px"}}/>
                        </div>
                    ))
                }
            </Carousel>
           </div>
        </div>
    );
}
export default ProductPicture;