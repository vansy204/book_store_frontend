/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bookstore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedConted" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home Page</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li><a className="dropdown-item" href="#">Category 1</a></li>
                                <li><a className="dropdown-item" href="#">Category 2</a></li>
                                <li><a className="dropdown-item" href="#">Category 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                sales regulations
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li><a className="dropdown-item" href="#">sales regulations 1</a></li>
                                <li><a className="dropdown-item" href="#">sales regulations 2</a></li>
                                <li><a className="dropdown-item" href="#">sales regulations 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>


                {/* tim kiem */}
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                {/* bieu tuong gio hang */}
                <ul className="navbar-nav me-1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>

                {/* bieu tuong dang nhap */}
                <ul className="navbar-nav me-1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-user"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}