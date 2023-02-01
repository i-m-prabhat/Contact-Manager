import React,{useState} from 'react'
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';


function App()
{
  // const [contacts, setContacts] = useState('')
  const contacts = [
    {
      id:1,
      name:'raj',
      mobile:9999999999,
      email:'raj@gmail.com'
    },
    {
      id:2,
      name:'Sid',
      mobile:9999999999,
      email:'sid@gmail.com'
    }
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
