import styles from 'components/ContactList/contactList.module.scss';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ContactItem } from 'components/ContactItem/contactItem';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getValue, getContacts } from 'redux/contacts/contacts-selectors';
export const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getValue);
  const toLower = filter.toLowerCase();
  const filteredContactList = items.filter(contact =>
    contact.name.toLowerCase().includes(toLower)
  );
  const dispatch = useDispatch();
  return (
    <>
      {filteredContactList.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContactList.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDeleteBtnClick={() => dispatch(deleteContact(id))}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className={styles.appTitle}>Your contact list is empty...</h2>
      )}
    </>
  );
};
