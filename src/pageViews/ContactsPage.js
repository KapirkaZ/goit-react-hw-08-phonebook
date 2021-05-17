import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import contactsOperations from "../redux/contacts/contactsOperations";
// import { CSSTransition } from "react-transition-group";
// import s from "../components/AppBar/AppBar.module.css";

const App = ({ isLoading, isError, fetchContacts }) => {
  // eslint-disable-next-line
  useEffect(() => fetchContacts(), []);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Oops, you broke our page! :(</p>
      ) : (
        <ContactList />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
  isError: contactsSelectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
