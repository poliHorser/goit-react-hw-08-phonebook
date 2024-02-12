import { useDispatch, useSelector } from "react-redux";

import Form from './Form/CreateForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


import { addContacts, deleteContacts } from "../redux/contacts/contacts-slice";
import { setFilter } from "../redux/filter/filter-slice";
import { getFilteredContacts } from "../redux/filter/filter-selectors";


const App = () => {
  
    const contacts = useSelector(getFilteredContacts)

    const dispatch = useDispatch()

    const createContact = (data) => {
      
      if (isDubl(data)) {
              return alert(`${data.name} is already in contacts`);
      }
      
      const action = addContacts(data)
      // console.log(action)
      dispatch(action)
    }


    const contactDelete = (id) => {
      dispatch(deleteContacts(id))
    }


    const isDubl = ({ name}) => {
      const normalizedName = name.toLowerCase();

      const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return (normalizedCurrentName === normalizedName);
      
      })

      return Boolean(dublicate);
    }

    const changeFilter = ({target}) => dispatch(setFilter(target.value))
    

    return (
      <div className='all'>
            <h1>Phonebook</h1>
            <Form  createContact={createContact}/>
            <Filter onChange={changeFilter}/>
            <ContactList contacts={contacts}  contactDelete={contactDelete}/>
            
      </div>
      
    )
    }

  export { App }






