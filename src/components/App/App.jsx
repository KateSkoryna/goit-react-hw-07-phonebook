import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Global styles={GlobalStyles} />
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      </PersistGate>
    </>
  );
};

export default App;
