import * as contactsApi from "../../api/contacts-api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async(_, thunkAPI) => {
        try {
            const data = await contactsApi.requestContacts()
            return data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

export const fetchAddContacts = createAsyncThunk("contacts/add",
    async (body, {rejectWithValue}) => {
        try {
            const data = await contactsApi.requestAddContacts(body)
            return data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    },
    {
        condition: ({name}, { getState }) => {
            
            const {contacts} = getState()
            const normalizedName = name.toLowerCase();

            const dublicate = contacts.items.find(item => {
            const normalizedCurrentName = item.name.toLowerCase();
            return (normalizedCurrentName === normalizedName);
            
            })
            if (dublicate) {
                alert(`${name} is already in contacts`);
                return false
            }
        }
    }
)


export const fetchDeleteContacts = createAsyncThunk("contacts/delete",
    async (id, {rejectWithValue}) => {
        try {
            await contactsApi.requestDeleteContacts(id)
            return id
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
    
)
