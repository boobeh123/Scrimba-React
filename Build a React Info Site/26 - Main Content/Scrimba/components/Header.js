import React from 'react'
import logo from '../public/assets/react-icon-small.png'

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-container">
                    <img 
                        src={logo} 
                        alt="React-Logo" 
                        className="logo-img" />
                    <span className="logo-text">Dog Facts</span>
                </div>
                <p className="nav-text">React Course - Project 1</p>
            </nav>
        </header>
    )
}

export default Header