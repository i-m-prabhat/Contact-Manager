import React, { useState, useEffect } from 'react'
import AddContact from './AddContact';
import './App.css';
// import { uuid } from 'uuidv4';
import uuid from 'react-native-uuid';
import ContactList from './ContactList';
import Header from './Header';

function App()
{
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) =>
  {
    console.log(contact);
    setContacts([...contacts,{id: uuid(),...contacts}]);
  };

  useEffect(() =>
  {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
    
  }, []);

  useEffect(() =>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
