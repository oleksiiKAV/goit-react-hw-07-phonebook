import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import contactsReducer from './contactsSlice';

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

export const store = configureStore({
  reducer: contactsReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // logger,
    // thunk,
  ],
});
