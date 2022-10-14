import React from "react";
import CardContact from './contact-card';

const ContactList = (props) => {
    
    const deleteContact = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
            <CardContact contact={contact} clickHandler={deleteContact} key={contact.id} />
        )
    })
    return <div className="ui celled list">{renderContactList}</div>
}

export default ContactList;