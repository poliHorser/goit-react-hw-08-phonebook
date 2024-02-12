import { ADD_CONTACTS } from "./constants"

const initialState = {
    contacts: []
}

const reducer = (state = initialState, {type, playload}) => {
    switch (type) {
        case ADD_CONTACTS:
            const { contacts } = state
            return {
                contacts: [...contacts, playload]
            }
        default:
            return state
    }
}


export default reducer