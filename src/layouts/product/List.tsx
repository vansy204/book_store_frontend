import React, { useEffect, useState } from "react";
import { BookModel } from "../../models/BookModel";
import BookProps from "./components/BookProps";
import { getAllBook, searchBook } from "../../api/BookAPI";
import { Pagination } from "../utils/Pagination";


interface ListProps{
    searchKey: string
}
function List({searchKey}: ListProps) {
    const [listBook,setListBook] = useState<BookModel[]>([]);
    const [loadingData,setLoadingData] = useState(true);
    const [errorRes,setError] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);

    const [totalElements,setTotalElements] = useState(0);
    useEffect(() =>{
        if(searchKey ===''){
            getAllBook(currentPage -1).then(
                result => {
                    setListBook(result.result);
                    setTotalElements(result.totalElement);
                    setLoadingData(false);
                }
            ).catch(
                error =>{
                    setError(error.message);
                }
            );
        }else{
            searchBook(searchKey).then(
                result => {
                    setListBook(result.result);
                    setTotalElements(result.totalElement);
                    setLoadingData(false);
                }
            ).catch(
                error =>{
                    setError(error.message);
                }
            );
        }
        
    },[currentPage,searchKey]) // chi goi 1 lan
    //phan trang
    const pagination = (page: number) => setCurrentPage(page);
            // phan trang
    
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
    if(listBook.length === 0){
        return(
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <h1>could not find book</h1>
                </div>
            </div>
        );
    }
    return (
        
        <div className="container">
            <div className="row mt-4 mb-4">
                {
                    listBook.map((book)=>(
                        <BookProps key={book.bookId} Book={book}/>
                    ))
                }
            </div>
            <Pagination currentpage={currentPage} totalpages={totalElements} pagination={pagination}/>
        </div>
    );
}

export default List;