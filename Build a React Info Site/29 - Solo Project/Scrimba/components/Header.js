import React from 'react'
import selfie from '../assets/images/bobby-asakawa.jpg'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Header() {
    return (
        <header className="header">
            <img 
                src={selfie} 
                alt="photo-of-Bobby-Asakawa" 
                className="card-img" />
            <h1 className="card-heading">Bobby Asakawa</h1>
            <span className="card-title">Software Engineer</span>
            <a href="https://bobby-asakawa.netlify.app/" target="_blank" className="card-portfolio">bobby-asakawa.netlify.app</a>
            <div className="btn-container">
                <a href="https://github.com/boobeh123" target="_blank" className="github-btn"><FaGithub className="fab fa-github"/>Github</a>
                <a href="https://www.linkedin.com/in/bobby-asakawa" target="_blank" className="linkedin-btn"><FaLinkedinIn className="fab fa-linkedin" />LinkedIn</a>
            </div>
        </header>
    )
}

export default Header