import styles from 'components/Filter/filter.module.scss';
// import PropTypes from 'prop-types';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux/es/exports';
export const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  return (
    <>
      {contacts.length > 1 && (
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.filter}
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            type="text"
            value={value}
          />
        </label>
      )}
    </>
  );
};

// Filter.propTypes = {
//   // onChange: PropTypes.func.isRequired,
//   // value: PropTypes.string.isRequired,
// };
