
import React from "react";
import { BookModel } from "../models/BookModel";
import { log } from "console";


async function request(enpoint: string) {
    // truy van den duong dan
    const response = await fetch(enpoint);
    // neu co loi
    if(!response.ok){
        throw new Error(`can not access ${enpoint}`)
    }
    // neu khong loi
    return response.json();
}

export async function getAllBook(): Promise<BookModel[]> {
    const result: BookModel[] = [];
    // xac dinh endpoint
    const endpoint: string = 'http://localhost:8080/book';
    
    // goi request
    const response = await request(endpoint);
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