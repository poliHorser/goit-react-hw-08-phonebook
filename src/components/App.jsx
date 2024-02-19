import { useDispatch, useSelector } from "react-redux";

import Form from './Form/CreateForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


import { setFilter } from "../redux/filter/filter-slice";
// import {selectAllContacts} from "../redux/contacts/contacts-selectors"
import {selectFilter} from "../redux/filter/filter-selectors"
import { fetchContacts, fetchAddContacts, fetchDeleteContacts } from "../redux/contacts/contacts-operations";

import { useEffect } from "react";


const App = () => {
  const items  = useSelector(selectFilter)
  const {isLoading, error} = useSelector(selectFilter)
  

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchContacts())
      
      }, [dispatch])

    const createContact = (data) => {    
      dispatch(fetchAddContacts(data))
    }


    const contactDelete = (id) => {
      dispatch(fetchDeleteContacts(id))
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






