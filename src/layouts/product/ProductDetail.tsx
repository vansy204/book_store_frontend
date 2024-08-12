import React, { useEffect, useState } from 'react'

import { BookModel } from '../../models/BookModel';
import { getBookById } from '../../api/BookAPI';
import { useParams } from 'react-router-dom';
import ProductPicture from './components/ProductPicture';
import DanhGiaSanPham from './components/DanhGiaSanPham';
import renderRating from '../utils/RatingStar';
import formatNumber from '../utils/FormatNumber';


const ProductDetail: React.FC = () => {

    // lay ma sach tu url
    const { bookId } = useParams();
    let bookNumber = 0;
    try {
        bookNumber = parseInt(bookId + "")
        if (Number.isNaN(bookNumber)) {
            bookNumber = 0;
        }
    } catch (error) {
        bookNumber = 0;
        console.error("Error: ", error);
    }

    const [book, setBook] = useState<BookModel | null>(null);
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);
    const [soLuong, setSoLuong] = useState(1);
    const tangSoLuong = () => {
        const soLuongHienTai = (book && book.quantity ? book.quantity : 0)
        if (soLuong < soLuongHienTai) {
            setSoLuong(soLuong + 1)
        }
    }
    const giamSoLuong = () => {
        if (soLuong >= 2) {
            setSoLuong(soLuong - 1);
        }
    }
    const handleSoLuong = (event: React.ChangeEvent<HTMLInputElement>) => {
        const soLuongMoi = parseInt(event.target.value);
        const soLuongTonKho = (book && book.quantity ? book.quantity : 0);
        if (!isNaN(soLuongMoi) && soLuongMoi >= 1 && soLuongMoi <= soLuongTonKho) {
            setSoLuong(soLuongMoi);
        }
    }
    const handleMuaNgay = () => {

    }
    const handleThemVaoGioHang = () => {

    }
    useEffect(() => {
        getBookById(bookNumber)
            .then((book) => {
                setBook(book);
                setLoadingData(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoadingData(false);
            })
    }, [bookId, bookNumber])
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
    if (!book) {
        return (
            <div>sach khong ton tai</div>
        )
    }
    return (
        <div className='container'>
            <div className="row mt-4 mb-4">
                <div className='col-4'>
                    <ProductPicture bookId={bookNumber} />
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1>
                                {book.bookName}
                            </h1>
                            <h4>
                                {renderRating(book.ratings ? book.ratings : 0)}
                            </h4>
                            <h4>
                                {formatNumber(book.price)}đ
                            </h4>
                            <hr />
                            <div dangerouslySetInnerHTML={{ __html: (book.description + "") }}></div>
                            <hr />
                        </div>
                        <div className='col-4'>
                            <div>
                                <div className='mb-2'>so luong</div>
                                <div className='d-flex align-items-center'>
                                    <button className='btn btn-outline-secondary me-2' onClick={giamSoLuong}>-</button>
                                    <input value={soLuong} className='form-control text-center' type='number' min={1} onChange={handleSoLuong} />
                                    <button className='btn btn-outline-secondary ms-2' onClick={tangSoLuong}>+</button>
                                </div>
                                {
                                    book.price && (
                                        <div className='mt-2 text-center'>so tien tam tinh <br />
                                            <h4>
                                                {formatNumber(soLuong * book.price)}đ
                                            </h4>
                                        </div>
                                    )
                                }
                                <div className='d-grid gap-2'>
                                    <button type='button' className='btn btn-danger mt-3' onClick={handleMuaNgay}>Mua Ngay</button>
                                    <button type='button' className='btn btn-outline-secondary mt-3' onClick={handleThemVaoGioHang}>Them Vao Gio Hang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <DanhGiaSanPham bookId={bookNumber} />
            </div>
        </div>
    );
}
export default ProductDetail;