import React from 'react'

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-container">
                    <img 
                        src="../public/assets/react-icon-small.png" 
                        alt="React-Logo" 
                        className="logo-img" />
                    <span className="logo-text">ReactFacts</span>
                </div>
                <p className="nav-text">React Course - Project 1</p>
            </nav>
        </header>
    )
}

export default Header