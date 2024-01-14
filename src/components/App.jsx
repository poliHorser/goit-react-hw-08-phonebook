import { useState, useEffect } from "react";
import {nanoid} from 'nanoid'


import Form from './Form/CreateForm'
import data from 'data/data'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

const App = () => {
//  
  const [contacts, setContacts] = useState(data)
  const [filter, setFilter] = useState('')
//mount
  useEffect(() => {
    const localData = localStorage.getItem('contacts')
    if (localData) {
      setContacts(JSON.parse(localData))
      
    }
  }, [])
  
//update
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
// 
  const createContact = (data) => {
    const userNew = {
      id: nanoid(),
      ...data
    }
// 
    const isDubl = contacts.find((el) => el.name.toLowerCase() === data.name.toLowerCase());
      if (isDubl) {
        return alert(`${data.name} is already in contacts`);
      }

    setContacts((prev) => [...prev, userNew])};
// 

    const contactDelete = (id) => {
      setContacts((prev) => {prev.filter((el) =>el.id !== id)})}

// 
    const handleChange = (e) => {
      setFilter(e.target.value);
    };

// 
   const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter((contact) =>
      contact.name && contact.name.includes(normalizedFilter)
    );
  };
//

  const filterContacts = getFilteredContacts()
  
  return (
    <div className='all'>
          <h1>Phonebook</h1>
          <Form createContact={createContact} />
          <Filter value={filter} onChange={handleChange} />
          <ContactList contacts={filterContacts}
            contactDelete={contactDelete} />
          
    </div>
    
  )
}
export { App }






