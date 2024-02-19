import React from "react";
import "./ContactList.css"
const ContactList = ({ contacts,
    contactDelete
}) => {
    return (
        contacts.map(({ id, name, phone }) => (
            <li key={id} className="contact_li">
                <h3 className="contact_title">
                    <span>{name}</span>
                    {phone}</h3>
                
                <button className="contact_btn" onClick={() => contactDelete(id)} type="button">
                    Delete
                </button>
            </li>
        )))
}

export default ContactList