import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => {
      const { name, number, id } = contact;
      return (
        <li className={styles.item} key={name}>
          <Contact name={name} number={number} onDelete={() => onDelete(id)} />
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
