import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="header-logo"></div>
                <ul className="list-items">
                    <li className="items"><a href="#">About</a></li>
                    <li className="items"><a href="#">How it works</a></li>
                    <li className="items"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
