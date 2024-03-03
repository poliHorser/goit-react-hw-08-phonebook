import axios from "axios";


const contactsInstance = axios.create({
    baseURL:  "https://connections-api.herokuapp.com/"
})

export const requestContacts = async () => {
    const { data } = await contactsInstance.get("/contacts")
    return data
}

export const requestAddContacts = async (body) => {
    // console.log(body); 
    const { data } = await contactsInstance.post("/contacts", body)
    return data
}

export const requestDeleteContacts = async (id) => {
    const { data } = await contactsInstance.delete(`/contacts/${id}`)
    return data
}