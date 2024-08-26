/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './App.css';
import { Navbar } from './layouts/header-footer/Navbar';
import { Footer } from './layouts/header-footer/Footer';
import { HomePage } from './layouts/homepage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './layouts/about/About';
import ProductDetail from './layouts/product/ProductDetail';
import DangKyNguoiDung from './layouts/user/DangKyNguoiDung';
import KichHoatTaiKhoan from './layouts/user/KichHoatTaiKhoan';
import DangNhap from './layouts/user/DangNhap';
import Test from './layouts/user/Test';
import SachForm from './admin/SachForm';
import SachForAdmin from './admin/SachForm';


function App() {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar searchKey={searchKey} setSearchKey={setSearchKey} />
        <Routes>
         <Route path='/' element={<HomePage searchKey={searchKey} />}/>
         <Route path='/:categoryId' element={<HomePage searchKey={searchKey} />}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/book/:bookId' element={<ProductDetail/>}/>
         <Route path='/dangKy' element={<DangKyNguoiDung/>}/>
         <Route path='/kich-hoat/:email/:activateCode'  element={<KichHoatTaiKhoan/>}/>
         <Route path='/dangNhap'  element={<DangNhap/>}/>
         <Route path='/Test'  element={<Test/>}/>
         <Route path='/admin/themSach'  element={<SachForAdmin/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
