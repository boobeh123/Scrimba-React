/**
Requirements:
Build from scratch
Fill in my own information
Create separate components
    - Info [photo, name buttons, etc]
    - About
    - Interests
    - Footer w/ social media
*/

const root = document.querySelector('#root')

function Header() {
    return (
        <header className="header">
            <img 
                src="./assets/images/bobby-asakawa.jpg" 
                alt="photo-of-Bobby-Asakawa" 
                className="card-img" />
            <h1 className="card-heading">Bobby Asakawa</h1>
            <span className="card-title">Software Engineer</span>
            <a href="https://bobby-asakawa.netlify.app/" target="_blank" className="card-portfolio">bobby-asakawa.netlify.app</a>
            <div className="btn-container">
                <a href="https://github.com/boobeh123" target="_blank" className="github-btn"><i className="fab fa-github"></i> Github</a>
                <a href="https://www.linkedin.com/in/bobby-asakawa" target="_blank" className="linkedin-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
        </header>
    )
}

function MainContent() {
    return (
        <section className="main-content">
            <h2>About</h2>
            <p>A detail-oriented software engineer with a deep interest in web development & web accessibility. Proven track record of creating and implementing successful front and back-end web applications and APIs.</p>
            <h2>Skills</h2>
            <p>HTML5, CSS3, JavaScript (ES6), Node, Express, MongoDB, Mongoose, React, MaterializeCSS, BootStrap</p>
        </section>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/boobeh123" target="_blank" className="fab fa-twitter fa-xl"></a>
            <a href="https://github.com/boobeh123" target="_blank" className="fab fa-github fa-xl"></a>
            <a href="https://www.linkedin.com/in/bobby-asakawa" target="_blank" className="fab fa-linkedin fa-xl"></a>
        </footer>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, root)