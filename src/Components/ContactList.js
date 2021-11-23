/** @format */

import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler=(id)=>{
    props.getContactID(id)
  };
  // render contact list propriété
  const contact =[{
    id:"1",
    name:"john",
    email:"johndoe@gmail.com"
  }]
  const renderContactList = contacts.map((contact) => {
    return (
    <ContactCard contact={contact} clickHandler={ deleteContactHandler} key={contact.id}/>
    );
  });
  return (
    <div className="main">
      <h2>
      Contact list
      <button className="ui button blue right"> Add contact</button>
      </h2>
    <div className="ui celled List">{renderContactList}
   </div>
   </div>);
 
};

export default ContactList;
