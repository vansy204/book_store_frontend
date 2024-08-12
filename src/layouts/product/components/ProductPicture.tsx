/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { PictureModel } from "../../../models/PictureModel";
import { getAllPicture, getFirtPictureOfBook } from "../../../api/PictureAPI";
import { Carousel } from "react-responsive-carousel";

interface ProductPictureInterface {
    bookId: number;
}

const ProductPicture: React.FC<ProductPictureInterface> = (props) => {
    const bookId: number = props.bookId;
    const [listPicture, setListPicture] = useState<PictureModel[]>([]);
    const [choosingPicture, setChoosingPicture] = useState<PictureModel | null >(null)
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);
    const choosePicture = (picture: PictureModel) =>{
        setChoosingPicture(picture)
    }
    useEffect(() => {
        getAllPicture(bookId).then(
            listPictureData => {
                setListPicture(listPictureData);
                if(listPictureData.length >0){
                    setChoosingPicture(listPictureData[0])
                }
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
            <div>
               {(choosingPicture) &&  <img src={choosingPicture.pictureData} alt="hinh anh san pham" />} 
            </div>
            <div className="row">
                    {
                        listPicture.map((picture,index)=>(
                            <div className={"col-3"} key={index} data-bs-interval="10000">
                                 <img onClick={()=>choosePicture(picture)} src={picture.pictureData} alt="hinh anh san pham" style={{width: '50px'}}/>
                            </div>
                        ))
                    }
            </div>
        </div>
    );
}
export default ProductPicture;