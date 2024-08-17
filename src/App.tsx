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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
