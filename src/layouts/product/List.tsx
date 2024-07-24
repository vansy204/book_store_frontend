import React from "react";
import { Book } from "../../models/Book";
import BookProps from "./components/BookProps";
const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        },
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        },
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        },
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        },
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        },
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        },
        {
            id: 1,
            title: 'Book 1',
            desciption: 'desciption for book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/1.jpg',
        },
        {
            id: 2,
            title: 'Book 2',
            desciption: 'desciption for book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/2.jpg',
        },
        {
            id: 3,
            title: 'Book 3',
            desciption: 'desciption for book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../../images/books/3.png',
        }
    ];
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map((book)=>(
                        <BookProps key={book.id} book={book} />
                    ))
                }
            </div>
        </div>
    );
}

export default List;