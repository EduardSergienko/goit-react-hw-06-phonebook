import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact } from './contacts-actions';
import { deleteContact } from './contacts-actions';
import { changeFilter } from './contacts-actions';
const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, action) => {
      if (
        state.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      return [...state, action.payload];
    },

    [deleteContact]: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  }
);

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
