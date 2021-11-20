/** @format */

import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler;
  // render contact list propriété
  const renderContactList = props.contacts.map((contact) => {
    return (
    <ContactCard contact={contact} clickHandler={ deleteContactHandler}/>
    );
  });
  return <div className="ui celled List">{renderContactList}</div>;
};

export default ContactList;
