export const selectContacts = state => state.contacts.items;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.filter;
