import { METHODS } from "http";
import React, { FormEvent, useState } from "react";
import RequireAdmin from "./RequireAdmin";


const SachForm: React.FC = () => {
    const [book, setBook] = useState({
        bookId: 0,
        isbn: '',
        author: '',
        bookName: '',
        descriptison: '',
        price: 0,
        listedPrice: 0,
        quantity: 0,
        raitings: 0
    });
    const handleSubmit = (even: FormEvent) => {
        even.preventDefault();
        const token = localStorage.getItem('token');
        const url: string = `http://localhost:8080/book`
        fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(book)
        }
        ).then((response) => {
            if (response.ok) {
                alert("Da them sach thanh cong");
                setBook({
                    bookId: 0,
                    isbn: '',
                    author: '',
                    bookName: '',
                    descriptison: '',
                    price: 0,
                    listedPrice: 0,
                    quantity: 0,
                    raitings: 0
                })
            }else{
                alert("Gap loi trong qua trinh them sach")
            }
        })
    }
    return (
        <div className="container mt-3">
            <div className="col-6 container-fluid">
                <h1>Them sach</h1>
                <form onSubmit={handleSubmit} action="" className="form">
                    <input type="hidden" id="bookId" value={book.bookId} />
                    <label htmlFor="bookName" >Book Name</label>
                    <input className="form-control" type="text" value={book.bookName}
                        onChange={(e) => { setBook({ ...book, bookName: e.target.value }) }}
                        required />
                    <label htmlFor="price" >Price</label>
                    <input className="form-control" type="number" value={book.price}
                        onChange={(e) => { setBook({ ...book, price: parseFloat(e.target.value) }) }}
                        required />
                    <label htmlFor="listedPrice" >Listed Price</label>
                    <input className="form-control" type="number" value={book.listedPrice}
                        onChange={(e) => { setBook({ ...book, listedPrice: parseFloat(e.target.value) }) }}
                        required />
                    <label htmlFor="quantity" >Quantity</label>
                    <input className="form-control" type="number" value={book.quantity}
                        onChange={(e) => { setBook({ ...book, quantity: parseInt(e.target.value) }) }}
                        required />
                    <label htmlFor="author" >Author</label>
                    <input className="form-control" type="text" value={book.author}
                        onChange={(e) => { setBook({ ...book, author: e.target.value }) }}
                        required />
                    <label htmlFor="description" >Description</label>
                    <input className="form-control" type="text" value={book.descriptison}
                        onChange={(e) => { setBook({ ...book, descriptison: e.target.value }) }}
                        required />
                    <label htmlFor="isbn" >ISBN</label>
                    <input className="form-control" type="text" value={book.isbn}
                        onChange={(e) => { setBook({ ...book, isbn: e.target.value }) }}
                        required />
                    <label htmlFor="raitings" >Raitings</label>
                    <input className="form-control" type="number" value={book.raitings}
                        onChange={(e) => { setBook({ ...book, raitings: parseFloat(e.target.value) }) }} />
                    <button type="submit" className="btn btn-primary mt-4" >Save</button>
                </form>
            </div>
        </div>
    );
}
const SachForAdmin = RequireAdmin(SachForm)
export default SachForAdmin;