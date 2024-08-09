// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

export class BookModel{
    bookId: number;
    bookName?: string;
    author?: string;
    ISBN?: string;
    description?: string;
    listedPrice?: number;
    price?: number;
    quantity?: number;
    ratings?: number;

    constructor(
        bookId: number,
        bookName?: string,
        author?: string,
        ISBN?: string,
        description?: string,
        listedPrice?: number,
        price?: number,
        quantity?: number,
        ratings?: number,
    ){
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.ISBN = ISBN;
        this.description = description;
        this.listedPrice = listedPrice;
        this.price = price;
        this.quantity = quantity;
        this.ratings = ratings;
    }
}