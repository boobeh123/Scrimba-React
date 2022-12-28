import React from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>© 2022 100Devs. All rights reserved.</p>
            </div>
            <div className="icon-container">
                <a href="https://github.com/boobeh123/" target="_blank"><FaGithub className="fa-icon fa-github" /></a>
                <a href="https://twitter.com/boobeh123" target="_blank"><FaTwitter className="fa-icon fa-twitter" /></a>
                <a href="https://www.linkedin.com/in/bobby-asakawa/" target="_blank"><FaLinkedinIn className="fa-icon fa-linkedin-in" /></a>
            </div>

        </footer>
    )
}

export default Footer