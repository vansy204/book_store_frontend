/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getAllRatings } from "../../../api/DanhGiaAPI";
import DanhGiaModel from "../../../models/DanhGiaModel";

interface DanhGiaSanPhamInterface {
    bookId: number;
}

const DanhGiaSanPham: React.FC<DanhGiaSanPhamInterface> = (props) => {
    const bookId: number = props.bookId;
    const [danhSachDanhGia, setDanhSachDanhGia] = useState<DanhGiaModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorRes, setError] = useState(null);

    useEffect(() => {
        getAllRatings(bookId).then(
            danhSachDanhGia => {
                setDanhSachDanhGia(danhSachDanhGia);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        );
    }, [bookId]) // chi goi 1 lan
    if (loadingData) {
        return (
            <div>
                <h1>Loadding Data</h1>
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
    return (
        <div className="container mt-2 mb-2">
            <h4>Danh gia san pham</h4>
            {
                danhSachDanhGia.map((danhGia, index) => (
                    <div className="row ">
                        <div className="col-4 text-end">
                            <p>{danhGia.ratePoint}</p>
                        </div>
                        <div className="col-8 text-start">
                            <p>{danhGia.comment}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}
export default DanhGiaSanPham;