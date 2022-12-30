import React from 'react'

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

export default Contact