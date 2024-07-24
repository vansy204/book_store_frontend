/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export function Carousel() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row align-items-center">
                        <div className="col-5 text-center" >
                            <img src={'./../../../../public/images/books/1.jpg'} className="float-end" style={{ width: '150px' }} />
                        </div>
                        <div className="col-7">
                            <h5>Đại Dương Đen</h5>
                            <p>Đại dương đen là một cuốn sách viết về những khủng hoảng</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <div className="row align-items-center">
                        <div className="col-5 text-center" >
                            <img src={"/public/images/books/2.jpg"} className="float-end" style={{ width: '150px' }} />
                        </div>
                        <div className="col-6">
                            <h5>Dê Mắt Qủy</h5>
                            <p>Đây là một cuốn sách kể về những người bạn vô tình đụng phải thứ không nên đụng chỉ vì những vô tư của mình</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <div className="row align-items-center">
                        <div className="col-5 text-center" >
                            <img src={'../../../../public/images/books/3.png'} className="float-end" style={{ width: '150px' }} />
                        </div>
                        <div className="col-6">
                            <h5>Món Quà Từ Cõi Chết</h5>
                            <p>Món quà đên từ cõi chết được viết bởi một tác giả trẻ ở Việt Nam là Diệp Lâm Khánh</p>
                        </div>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}