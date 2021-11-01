import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => (
  <fieldset className={styles.Filter}>
    <label className={styles.label}>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  </fieldset>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getContactsFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: ({ target: { value } }) => dispatch(actions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
