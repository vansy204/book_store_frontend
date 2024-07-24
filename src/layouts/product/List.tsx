import React, { useEffect, useState } from "react";
import { BookModel } from "../../models/BookModel";
import BookProps from "./components/BookProps";
import { getAllBook } from "../../api/BookAPI";


const List: React.FC = () => {
    const [listBook,setListBook] = useState<BookModel[]>([]);
    const [loadingData,setLoadingData] = useState(true);
    const [errorRes,setError] = useState(null);

    useEffect(() =>{
        getAllBook().then(
            bookData => {
                setListBook(bookData);
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
    return (
        
        <div className="container">
            <div className="row mt-4">
                {
                    listBook.map((book)=>(
                        <BookProps key={book.bookId} Book={book}/>
                    ))
                }
            </div>
        </div>
    );
}

export default List;