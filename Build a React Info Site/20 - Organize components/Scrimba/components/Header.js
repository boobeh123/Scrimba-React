import React from 'react'

function Header() {
    return (
        <header className="header">
            <nav className="header-nav">
                <img src="./react-logo.png" alt="react-logo" className="header-logo" />
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header