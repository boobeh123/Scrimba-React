import React from 'react'

// Hard-coded
function Contact() {
    return (
        <div>
            <div className="contact-card">
                <img src="./images/felix.png"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
        </div>
    )
}

// Dynamic
// function Contact(props) {
//     return (
//         <div>
//             <div className="contact-card">
//                 <img src={props.img}/>
//                 <h3>{props.name}</h3>
//                 <div className="info-group">
//                     <img src="./images/phone-icon.png" />
//                     <p>{props.number}</p>
//                 </div>
//                 <div className="info-group">
//                     <img src="./images/mail-icon.png" />
//                     <p>{props.email}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Contact