// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/contactForm';
import Filter from './Filter/filter';
import ContactList from './ContactList/contactList';
import styles from './appWrap.module.scss';
// import useLocalStorage from '../Hooks/useLocalStorage';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  return (
    <>
      <h1 className={styles.appTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.appTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
