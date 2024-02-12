import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CONTACTS } from "../redux/constants";

import Form from './Form/CreateForm'
import data from '../data/data'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { addContacts } from "../redux/actions";

const App = () => {
  //  
  const contacts = useSelector(store => store.contacts)
  const [filter, setFilter] = useState('')

  const dispatch = useDispatch()

  const createContact = (data) => {
    const action = addContacts(data)
    dispatch(action)
  }


  //   const createContact = (data) => {
//     const userNew = {
//       id: nanoid(),
//       ...data
  //     }
  


  // const [contacts, setContacts] = useState(data)
  
// //mount
//   useEffect(() => {
//     const localData = localStorage.getItem('contacts')
//     if (localData) {
//       setContacts(JSON.parse(localData))
      
//     }
//   }, [])
  
// //update
//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts))
//   }, [contacts])
// //


    // const isDubl = ({ name}) => {
    //     const normalizedName = name.toLowerCase();

    //     const dublicate = contacts.find(item => {
    //         const normalizedCurrentName = item.name.toLowerCase();
    //         return (normalizedCurrentName === normalizedName);
    //     })

    //     return Boolean(dublicate);
    // }
    // const isDubl = contacts.find((el) => el.name.toLowerCase() === data.name.toLowerCase());
    //   if (isDubl) {
    //     return alert(`${data.name} is already in contacts`);
    //   }

    // setContacts((prev) => [...prev, userNew])

//

//     const contactDelete = (id) => {
//       setContacts((prev) => prev.filter((el) =>el.id !== id))}

// //
//     const handleChange = (e) => {
//       setFilter(e.target.value);
//     };

// //
//    const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
// //

//   const filterContacts = getFilteredContacts()
  
//   return (
//     <div className='all'>
//           <h1>Phonebook</h1>
//           <Form createContact={createContact} />
//           <Filter value={filter} onChange={handleChange} />
//           <ContactList contacts={filterContacts}
//             contactDelete={contactDelete} />
          
//     </div>
    
//   )
  // }

  return (
    <div className='all'>
          <h1>Phonebook</h1>
          <Form  createContact={createContact}/>
          <Filter />
          <ContactList contacts={contacts}/>
          
    </div>
    
  )
  }

export { App }






