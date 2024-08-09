/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { NavLink } from "react-router-dom";


interface NavbarProps {
    searchKey: string;
    setSearchKey: (key: string) => void;
}

export function Navbar({ searchKey, setSearchKey }: NavbarProps) {
    const [tempKey, setTempKey] = useState('');

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempKey(e.target.value);
    };

    const handleSearch = () => {
        setSearchKey(tempKey);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchKey(tempKey);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Bookstore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home Page</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <li><NavLink className="dropdown-item" to="/1">Category 1</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/2">Category 2</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/3">Category 3</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sales Regulations
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                <li><a className="dropdown-item" href="#">Sales Regulations 1</a></li>
                                <li><a className="dropdown-item" href="#">Sales Regulations 2</a></li>
                                <li><a className="dropdown-item" href="#">Sales Regulations 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Search */}
                <div className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={onSearchInputChange}
                        value={tempKey}
                        onKeyDown={handleKeyDown}  // Lắng nghe sự kiện onKeyDown trên input
                    />
                    <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                {/* Shopping Cart Icon */}
                <ul className="navbar-nav me-1">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>

                {/* User Icon */}
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
