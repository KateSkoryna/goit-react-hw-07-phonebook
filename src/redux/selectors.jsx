export const selectContacts = state => state.contacts.items;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.filter;

export const selectContactsByName = state => {
  const contacts = selectContacts(state);
  const filter = selectFilterValue(state);
  if (!filter) {
    return [...contacts].sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );
  }
  return [...contacts]
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    )
    .filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
};
