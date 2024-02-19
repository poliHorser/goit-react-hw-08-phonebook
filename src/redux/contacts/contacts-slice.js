import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        fetchContactsLoading: (state) => {
            state.isLoading = true
        }, 

        fetchContactsSuccess: (state, { payload }) => {
            state.isLoading = false
            state.items = payload
            
        },

        fetchContactsError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
        // 
        
        fetchAddLoading: (state) => {
            state.isLoading = true
        }, 

        fetchAddSuccess: (state, { payload }) => {
            state.isLoading = false
            state.items.push(payload)
            
        },

        fetchAddError: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
        // 

        addContacts: {
            reducer: (state, { payload }) => {
                state.push(payload)
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data
                    }
                }
            }
        },
        deleteContacts: (state, { payload }) => {
            return state.filter((item) => item.id !== payload);
    },
    }
})

export const { addContacts,
    deleteContacts,
    fetchContactsLoading,
    fetchContactsSuccess,
    fetchContactsError,
    fetchAddLoading,
    fetchAddSuccess,
    fetchAddError} = contactsSlice.actions
export default contactsSlice.reducer