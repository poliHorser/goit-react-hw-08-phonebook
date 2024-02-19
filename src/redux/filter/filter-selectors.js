export const selectFilter = store => store.filter

export const selectFilteredContacts = store => {
    const { contacts, filter } = store
    
    if (!filter) {
        return contacts
    }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

}