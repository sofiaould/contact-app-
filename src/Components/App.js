import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {uuid} from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
const LOCAL_STORAGE_KEY="contacts";
const [contact,setContacts]= useState([])

  const AddContactHandler=(contact)=>{
    setContacts([...contacts,{ id:uuid(),...contact }])   
  }

  const removeContactHandler =(id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id!== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retrieveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  return (
    <div className="ui container">
      <Router>
      <Header />
      <Switch> 
      < Router path="/" exact component={()=>(
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        )}/>
      < Router path="/add" component={()=>(
        <AddContact addContactHandler={addContactHandler}/> 
        )}
        />
      </Switch>
      {/* <AddContact AddContactHandler={AddContactHandler}/> */}
      {/* on lui passe contacts en props - propriete */}
      {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
