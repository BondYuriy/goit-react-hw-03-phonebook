import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storageContacts !== null) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = obj => {
    const { contacts } = this.state;

    const isResult = contacts.filter(
      contact =>
        contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase(),
    );

    if (isResult.length > 0) {
      alert('such name exists');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, obj],
      }));
    }
  };

  handleFilterChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    this.setState({
      [name]: value,
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredFriends = contacts.filter(friend =>
      friend.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={this.addContact} />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={filteredFriends}
            onDelete={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
