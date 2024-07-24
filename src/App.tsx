/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './App.css';
import { Navbar } from './layouts/header-footer/Navbar';
import { Footer } from './layouts/header-footer/Footer';
import { HomePage } from './layouts/homepage/HomePage';
import { getAllBook } from './api/BookAPI';
import List from './layouts/product/List';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
