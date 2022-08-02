import styles from 'components/ContactList/contactList.module.scss';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/contactItem';
import { connect } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts/contacts-actions';
const ContactList = ({ contacts, onDeleteBtnClick }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDeleteBtnClick={() => onDeleteBtnClick(id)}
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const toLower = filter.toLowerCase();
  const filteredContactList = items.filter(contact =>
    contact.name.toLowerCase().includes(toLower)
  );
  return {
    contacts: filteredContactList,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteBtnClick: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
