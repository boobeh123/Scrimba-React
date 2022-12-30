import React from 'react'

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

export default Contact