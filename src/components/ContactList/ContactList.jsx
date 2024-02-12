import React from "react";
import Contact from "../Contact/Contact";


const ContactList = ({ contacts,
    contactDelete
}) => {
    return (contacts.map(el => <Contact contacts={contacts}
        key={el.id}
        contactDelete={contactDelete}
    />))
}

export default ContactList