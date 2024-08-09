/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { BookModel } from "../models/BookModel";
import { my_request } from "./Request";

interface resultInterface {
    result: BookModel[];
    totalPages: number;
    totalElement: number;
}


async function getBook(endpoint: string): Promise<resultInterface> {
    const result: BookModel[] = [];

    // goi request
    const response = await my_request(endpoint);
    // lay ra json book
    const responseData = response._embedded.books;

    // lay thong tin trang
    const totalPages: number = response.page.totalPages;
    const totalElements: number = response.page.totalElements;

    for (const key in responseData) {
        result.push({
            bookId: responseData[key].bookId,
            bookName: responseData[key].bookName,
            author: responseData[key].author,
            ISBN: responseData[key].ISBN,
            description: responseData[key].description,
            listedPrice: responseData[key].listedPrice,
            price: responseData[key].price,
            quantity: responseData[key].quantity,
            ratings: responseData[key].ratings,
        })
    }
    return { result: result, totalElement: totalElements, totalPages: totalPages };
}

export async function getAllBook(currentPage: number): Promise<resultInterface> {
    // xac dinh endpoint
    const endpoint: string = `http://localhost:8080/book?sort=bookId,desc&size=8&page=${currentPage}`;
    return getBook(endpoint);
}

export async function get3NewBook(): Promise<resultInterface> {
    // xac dinh endpoint
    const endpoint: string = 'http://localhost:8080/book?sort=bookId,desc&page=0&size=3';
    return getBook(endpoint);
}
//http://localhost:8080/book/search/findByBookNameContaining?bookName=tam%20ly

export async function searchBook(searchKey: string, categoryId: number): Promise<resultInterface> {
    let endpoint: string = `http://localhost:8080/book?sort=bookId,desc&size=8&page=0`;
    if (searchKey !== "" && categoryId === 0) {
        endpoint = `http://localhost:8080/book/search/findByBookNameContaining?sort=bookId,desc&size=8&page=0&bookName=${searchKey}`;
    } else if (searchKey === "" && categoryId > 0) {
        endpoint = `http://localhost:8080/book/search/findByCategories_categoryId?sort=bookId,desc&size=8&&page=0&categoryId=${categoryId}`
    } else if (searchKey !== "" && categoryId > 0) {
        endpoint = `http://localhost:8080/book/search/findByBookNameContainingAndCategories_categoryId?sort=bookId,desc&size=8&&page=0&categoryId=${categoryId}&bookName=${searchKey}`
    }
    return getBook(endpoint);
}

//http://localhost:8080/book/?

export async function getBookById(bookId: number): Promise<BookModel | null> {
    const endpoint = `http://localhost:8080/book/${bookId}`
    let result: BookModel;
    // goi request
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Gap loi trong qua trinh goi API lay sach");
        }
        const bookData = await response.json();
        if (bookData) {
            return {
                bookId: bookData.bookId,
                bookName: bookData.bookName,
                author: bookData.author,
                ISBN: bookData.ISBN,
                description: bookData.description,
                listedPrice: bookData.listedPrice,
                price: bookData.price,
                quantity: bookData.quantity,
                ratings: bookData.ratings,
            }
        }else{
            throw new Error("Sach khong ton tai");
        }
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }

}
