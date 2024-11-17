// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList />
      </Container>
    </Provider>
  );
};

export default App;
