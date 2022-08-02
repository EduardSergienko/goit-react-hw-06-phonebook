import styles from 'components/Filter/filter.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux/es/exports';
import { changeFilter } from 'redux/contacts/contacts-actions';
const Filter = ({ onChange, value, contacts }) => {
  return (
    <>
      {contacts.length > 1 && (
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.filter}
            onChange={onChange}
            type="text"
            value={value}
          />
        </label>
      )}
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
