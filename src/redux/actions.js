import { ADD_CONTACTS } from "./constants"
import { nanoid } from "nanoid"


export const addContacts = payload => {
    return {
       
        type: ADD_CONTACTS,
        payload: {
            id: nanoid(),
            ...payload
        }
    }
}