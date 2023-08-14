import { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number }, { resetForm }) => {
    if (this.state.contacts.find(value => value.name === name)) {
      toast.error(`${name} is already in the contact list`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name: name, number: number }],
    }));
    toast.success(`${name} added to contact list`);
    resetForm();
  };
  changeFilter = filterValue => {
    this.setState({ filter: filterValue });
  };
  handleDelete = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== contactId),
      };
    });
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactsList
          listOfContacts={visibleContacts}
          handleDelete={this.handleDelete}
        />
        <Toaster />
      </Wrapper>
    );
  }
}
