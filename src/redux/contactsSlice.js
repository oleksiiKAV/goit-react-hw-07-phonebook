import { addContact, getContact, removeContact } from './contactsOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filtered: (state, { payload }) => {
      state.filter = payload;
    },
    // removeContactRequest(state) {
    //   state.isLoading = true;
    //   console.log('state.contacts', state.contacts);
    // },
    // removeContactSuccess(state, { payload }) {
    //   state.isLoading = false;
    //   state.contacts = state.contacts.filter(el => el.id !== payload);
    // },
    // removeContactError(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(getContact.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(el => el.id !== payload);
      })
      .addMatcher(
        action => {
          if (action.type.endsWith('/pending')) return true;
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          if (action.type.endsWith('/fulfilled')) return true;
        },
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => {
          if (action.type.startsWith('contact') && action.type.endsWith('/rejected')) return true;
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});



export const { filtered } = contactsSlice.actions;

export default contactsSlice.reducer;
