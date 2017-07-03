import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { isToggleOn: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const menuActive = this.state.isToggleOn ? ' is-active' : '';
        return (
            <header className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <Link to="/" className="nav-item">My Company</Link>
                    </div>

                    <span className={`nav-toggle${menuActive}`} onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                    {/*<div :class="['nav-right', 'nav-menu', { 'is-active': isActive }]">*/}
                    <div className={`nav-right nav-menu${menuActive}`}>
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