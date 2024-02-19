import { useDispatch, useSelector } from "react-redux";

import Form from './Form/CreateForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


import {  deleteContacts } from "../redux/contacts/contacts-slice";
import { setFilter } from "../redux/filter/filter-slice";
// import { selectFilteredContacts } from "../redux/filter/filter-selectors";
import {selectAllContacts} from "../redux/contacts/contacts-selectors"
 
import { fetchContacts, fetchAddContacts } from "../redux/contacts/contacts-operations";

import { useEffect } from "react";


const App = () => {
    const {items, isLoading, error} = useSelector(selectAllContacts)

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchContacts())
      
      }, [dispatch])

    const createContact = (data) => {
      
      if (isDubl(data)) {
              return alert(`${data.name} is already in contacts`);
      }
    
      dispatch(fetchAddContacts(data))
      
    }


    const contactDelete = (id) => {
      dispatch(deleteContacts(id))
    }


    const isDubl = ({ name}) => {
      const normalizedName = name.toLowerCase();

      const dublicate = items.find(item => {
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
        <Filter onChange={changeFilter} />
        {isLoading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {items && items.length > 0 && (
          <ContactList contacts={items} contactDelete={contactDelete} />
        )} 
      </div>
      
    )
    }

  export { App }






