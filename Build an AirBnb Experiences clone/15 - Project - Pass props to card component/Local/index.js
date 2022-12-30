/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

// Note from me: The code within the LOCAL directory is compatible with LiveServer && will work if cloned & launched.

const root = document.querySelector('#root')

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img 
                    src="./assets/images/airbnb-logo.png" 
                    alt="AirBnb-logo-and-logo-text" 
                    className="logo-img" />
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <section className="hero">
            <img 
                src="./assets/images/photo-grid.png"
                alt="Several-images-in-one-image" 
                className="hero-img" />
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </section>
    )
}

function Card(props) {
    const intToFloat = (number, decPlace) => number.toFixed(decPlace);
    return (
        <div className="card-container">
            <div className="img-container">
                <img 
                    src={props.img}
                    alt="Katie-Zaferes-Swim-suit-USA" />
                <span>SOLD OUT</span>
            </div>
            <div className="text-container">
                <div>
                    <img 
                        src="./assets/images/star.png"
                        alt="red-star-for-ratings" />
                    <span>{intToFloat(props.rating, 1)}</span>
                    <span>({props.reviewCount}) &deg; {props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong>/ person</p>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Card 
                img="./assets/images/katie-zaferes.png"
                rating={5.0}
                reviewCount={6}
                location="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}

ReactDOM.render(<App />, root)