import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectIsContacts = state => Boolean(selectContacts(state).length);

export const selectError = state => state.error;
// export const showFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     if (!filter) return contacts;
//     return contacts.filter(el =>
//       el.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

export const showFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    
    const sortedContacts = [...contacts].sort((a, b) => b.id - a.id); // Create a copy of the contacts array and sort the copy
    return sortedContacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
