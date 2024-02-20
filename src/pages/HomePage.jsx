import { useDispatch, useSelector } from "react-redux";

import Form from '../components/Form/CreateForm'
import ContactList from '../components/ContactList/ContactList'
import Filter from '../components/Filter/Filter'
import { setFilter } from "../redux/filter/filter-slice";
import {selectFilter} from "../redux/filter/filter-selectors"
import { fetchContacts, fetchAddContacts, fetchDeleteContacts } from "../redux/contacts/contacts-operations";

import { useEffect } from "react";


const HomePage = () => {
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

  export { HomePage }






