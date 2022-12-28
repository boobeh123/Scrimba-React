/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

// Note from me: The code within the LOCAL directory is compatible with LiveServer && will work if cloned & launched.

const root = document.querySelector('#root')

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo-container">
                    <img 
                        src="./public/assets/react-icon-small.png" 
                        alt="React-Logo" 
                        className="logo-img" />
                    <span className="logo-text">DogFacts</span>
                </div>
                <p className="nav-text">React Course - Project 1</p>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <section className="main-container">
            <h1 className="main-text">Fun facts about Dogs</h1>
            <ul className="main-list">
                <li><span>A dog's nose print is unique, much like a human fingerprint.</span></li>
                <li><span>All dogs have dreams.</span></li>
                <li><span>Dogs curl up into a ball to protect their organs.</span></li>
                <li><span>Petting a dog reduces blood pressure in humans & dogs.</span></li>
            </ul>
        </section>   
    )    
}

function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>© 2022 100Devs. All rights reserved.</p>
            </div>
            <div className="icon-container">
                <a href="#"><i class="fab fa-github fa-2xl"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2xl"></i></a>
                <a href="#"><i class="fab fa-linkedin-in fa-2xl"></i></a>
            </div>

        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, root)