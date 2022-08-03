import ContactForm from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';
import styles from './appWrap.module.scss';

export default function App() {
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
