
import React from "react";
import { BookModel } from "../models/BookModel";
import { my_request } from "./Request";




async function getBook(endpoint: string): Promise<BookModel[]>{
    const result: BookModel[] = [];
    
    // goi request
    const response = await my_request(endpoint);
    // lay ra json book
    const responseData = response._embedded.books;
    for(const key in responseData){
        result.push({
            bookId: responseData[key].bookId,
            bookName: responseData[key].bookName,
            author: responseData[key].author,
            ISBN: responseData[key].ISBN,
            desciption: responseData[key].desciption,
            listedPrice: responseData[key].listedPrice,
            price: responseData[key].price,
            quantity: responseData[key].quantity,
            ratings: responseData[key].ratings,
        })
    }
    return result;
}

export async function getAllBook(): Promise<BookModel[]> {
    // xac dinh endpoint
    const endpoint: string = 'http://localhost:8080/book?sort=bookId,desc';
    return getBook(endpoint);
}

export async function get3NewBook(): Promise<BookModel[]> {
    // xac dinh endpoint
    const endpoint: string = 'http://localhost:8080/book?sort=bookId,desc&page=0&size=3';
    return getBook(endpoint);
}