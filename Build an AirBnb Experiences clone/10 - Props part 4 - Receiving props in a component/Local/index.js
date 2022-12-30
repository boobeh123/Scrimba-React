/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
        My answer: It messes up styling due to CSS selectors
        Bob's answer: The data is static and cannot be changed
*/

/* 
2nd Challenge: Add all the rest of the 
data to the Contact card instances
*/

const root = document.querySelector('#root');

// Dynamic
function Contact(props) {
    return (
        <div>
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.number}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.email}</p>
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

// function App() {
//     return (
//         <div className="contacts">
        
//             <div className="contact-card">
//                 <img src="./images/mr-whiskerson.png"/>
//                 <h3>Mr. Whiskerson</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" />
//                     <p>(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" />
//                     <p>mr.whiskaz@catnap.meow</p>
//                 </div>
//             </div>
            
//             <div className="contact-card">
//                 <img src="./images/fluffykins.png"/>
//                 <h3>Fluffykins</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" />
//                     <p>(212) 555-2345</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" />
//                     <p>fluff@me.com</p>
//                 </div>
//             </div>
            
//             <div className="contact-card">
//                 <img src="./images/felix.png"/>
//                 <h3>Felix</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" />
//                     <p>(212) 555-4567</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" />
//                     <p>thecat@hotmail.com</p>
//                 </div>
//             </div>
            
//             <div className="contact-card">
//                 <img src="./images/pumpkin.png"/>
//                 <h3>Pumpkin</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" />
//                     <p>(0800) CAT KING</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" />
//                     <p>pumpkin@scrimba.com</p>
//                 </div>
//             </div>
            
//         </div>
//     )
// }