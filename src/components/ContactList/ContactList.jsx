import React from "react";
import "./ContactList.css"
const ContactList = ({ contacts,
    contactDelete
}) => {
    return (
        contacts.map(({ id, name, number }) => (
            <li key={id} className="contact_li">
                <p className="contact_title">
                   {' '}
                    <span>{name}</span> {number}{' '}
                    </p>
                <button className="contact_btn" onClick={() => contactDelete(id)} type="button">
                    Delete
                </button>
            </li>
        )))
}

export default ContactList