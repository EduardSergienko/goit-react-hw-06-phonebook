import { configureStore, createSlice } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-reducer';
import { nanoid } from 'nanoid';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        if (
          state.items.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return alert(`${action.payload.name} is already in contacts`);
        }
        state.items.push(action.payload);
        // return [...state.contacts.items, action.payload];
      },
      prepare: data => {
        const { name, number } = data;
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
console.log(contactsSlice);

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const getValue = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const persistor = persistStore(store);
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
