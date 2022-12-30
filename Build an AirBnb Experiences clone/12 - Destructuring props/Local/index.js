// Challenge: fix the bug, now that we've destructured the props object

const root = document.querySelector('#root');

function Contact({ img, name, number, email }) {
    return (
        <div>
            <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{number}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/felix.png"
                name="Felix"
                number="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                number="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                number="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                number="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

ReactDOM.render(<App />, root)