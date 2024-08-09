import React, { useEffect, useState } from 'react'

import { BookModel } from '../../models/BookModel';
import { getBookById } from '../../api/BookAPI';
import { useParams } from 'react-router-dom';


const ProductDetail: React.FC = () => {

    // lay ma sach tu url
    const {bookId} = useParams();
    let bookNumber = 0;
    try{
        bookNumber = parseInt(bookId+"")
        if(Number.isNaN(bookNumber)){
            bookNumber =0;
        }
    }catch(error){
        bookNumber =0;
        console.error("Error: ", error);
    }

    const [book,setBook] = useState<BookModel | null> (null);
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);
    useEffect(()=>{
            getBookById(bookNumber)
            .then((book)=>{
                setBook(book);
                setLoadingData(false);
            })
            .catch((error) =>{
                setError(error.message);
                setLoadingData(false);
            })
    },[bookId, bookNumber])
    if (loadingData) {
        return (
            <div>
                <h1>Loading Data</h1>
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
    if(!book){
        return(
            <div>sach khong ton tai</div>
        )
    }
    return (
       <div className='container'>
         <div className="row mt-4 mb-4">
            <div className='col-4'>
                {book.bookId}
            </div>
            <div className='col-8'>
                <div className='row'>
                    <div className='col-8'>
                        <h1>
                            {book.bookName}
                        </h1>
                        <h4>
                            {book.ratings}
                        </h4>
                        <h4>
                            {book.price}
                        </h4>
                        <hr />
                            <div dangerouslySetInnerHTML={{__html : (book.description +"")}}></div>
                        <hr />
                    </div>
                    <div className='col-4'>
                        phan dat hang
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-4 mb-4">
           phan review
        </div>
       </div>
    );
}
export default ProductDetail;