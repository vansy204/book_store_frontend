import React from "react";

export class BookModel{
    bookId: number;
    bookName?: string;
    author?: string;
    ISBN?: string;
    desciption?: string;
    listedPrice?: number;
    price?: number;
    quantity?: number;
    ratings?: number;

    constructor(
        bookId: number,
        bookName?: string,
        author?: string,
        ISBN?: string,
        desciption?: string,
        listedPrice?: number,
        price?: number,
        quantity?: number,
        ratings?: number,
    ){
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.ISBN = ISBN;
        this.desciption = desciption;
        this.listedPrice = listedPrice;
        this.price = price;
        this.quantity = quantity;
        this.ratings = ratings;
    }
}