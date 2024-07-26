/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './App.css';
import { Navbar } from './layouts/header-footer/Navbar';
import { Footer } from './layouts/header-footer/Footer';
import { HomePage } from './layouts/homepage/HomePage';

function App() {
  const [searchKey,setSearchKey] = useState("");

  return (
    <div className="App">
      <Navbar searchKey={searchKey} setSearchKey ={setSearchKey}/>
     <HomePage searchKey={searchKey}/>
      <Footer/>
    </div>
  );
}

export default App;
