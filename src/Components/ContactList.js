/** @format */

import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler=(id)=>{
    props.getContactID(id)
  };
  // render contact list propriété
  const renderContactList = contacts.map((contact) => {
    return (
    <ContactCard contact={contact} clickHandler={ deleteContactHandler} key={contact.id}/>
    );
  });
  return <div className="ui celled List">{renderContactList}</div>;
};

export default ContactList;
