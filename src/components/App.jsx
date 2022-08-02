import { useState } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
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

  // const [filter, setFilter] = useState('');

  // const addContact = data => {
  //   const { name, number } = data;

  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${name} is already in contacts`);
  //   } else {
  //     const contact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //     setContacts([...contacts, contact]);
  //   }
  // };

  // const onfilterInputType = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const filteredContactList = () => {
  //   const toLower = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(toLower)
  //   );
  // };
  // const deleteContact = contactid => {
  //   setContacts(contacts.filter(contact => contact.id !== contactid));
  // };

  return (
    <>
      <h1 className={styles.appTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.appTitle}>Contacts</h2>

      <ContactList />
      {/* {contacts.length > 1 && (
        <Filter onChange={onfilterInputType} value={filter} />
      )}



      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContactList()}
          onDeleteBtnClick={deleteContact}
        />
      ) : (
        <h2 className={styles.appTitle}>Your contact list is empty...</h2>
      )} */}
    </>
  );
}
