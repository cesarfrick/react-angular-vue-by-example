import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer is-primary">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p>And this right here is a spiffy footer, where you can put stuff.</p>
                    </div>
                    <div className="column has-text-right">
                        <a className="icon"><i className="fa fa-facebook"></i></a>
                        <a className="icon"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;