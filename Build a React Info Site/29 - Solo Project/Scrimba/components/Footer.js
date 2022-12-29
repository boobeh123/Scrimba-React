import React from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/boobeh123" target="_blank"><FaTwitter className="fab fa-twitter fa-xl" /></a>
            <a href="https://github.com/boobeh123" target="_blank"><FaGithub className="fab fa-github fa-xl" /></a>
            <a href="https://www.linkedin.com/in/bobby-asakawa" target="_blank"><FaLinkedinIn className="fab fa-linkedin fa-xl" /></a>
        </footer>
    )
}

export default Footer