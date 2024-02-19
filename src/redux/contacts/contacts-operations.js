import * as contactsApi from "../../api/contacts-api"
import {fetchContactsError, fetchContactsLoading, fetchContactsSuccess, fetchAddError, fetchAddSuccess, fetchAddLoading} from "./contacts-slice"

export const fetchContacts = () => {
    const func = async (dispatch) => {
        try {
            dispatch(fetchContactsLoading())
            const data = await contactsApi.requestContacts()
            dispatch(fetchContactsSuccess(data))
        }
        catch (error) {
            dispatch(fetchContactsError(error.message))
        }        
    }
    return func
}

export const fetchAddContacts = (body) => {
    const func = async (dispatch) => {
        try {
            dispatch(fetchAddLoading())
            const data = await contactsApi.requestAddContacts(body)
            dispatch(fetchAddSuccess(data))
        }
        catch (error) {
            dispatch(fetchAddError(error.message))
        }        
    }
    return func
}

