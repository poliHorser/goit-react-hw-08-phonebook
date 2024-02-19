import axios from "axios";


const contactsInstance = axios.create({
    baseURL:  "https://65ca72d33b05d29307e04ed2.mockapi.io/api/contacts"
})

export const requestContacts = async () => {
    const { data } = await contactsInstance.get("/")
    return data
}

export const requestAddContacts = async (body) => {
    const { data } = await contactsInstance.get("/", body)
    return data
}
