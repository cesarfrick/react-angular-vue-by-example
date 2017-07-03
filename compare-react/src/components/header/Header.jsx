import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <Link to="/" className="nav-item">My Company</Link>
                    </div>

                    {/*<span :class="['nav-toggle', { 'is-active': isActive }]" @click="toggleNav">*/}
                    <span className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                    {/*<div :class="['nav-right', 'nav-menu', { 'is-active': isActive }]">*/}
                    <div className="nav-right nav-menu">
                        <Link to="/" className="nav-item r-item">Home</Link>
                        <Link to="/faq" className="nav-item r-item">Features</Link>
                        <Link to="/faq" className="nav-item r-item">About</Link>
                        <Link to="/faq" className="nav-item r-item">Faq</Link>

                        <div className="nav-item">
                            <p className="control">
                                <a className="button is-primary is-outlined">
                                    <span className="icon">
                                        <i className="fa fa-download"></i>
                                    </span>
                                    <span>Join Now</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;