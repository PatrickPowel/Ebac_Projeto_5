import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactForm = ({ editMode, contactToEdit, onEditComplete }) => {
  const [contact, setContact] = useState(contactToEdit || { name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(editContact(contact));
      onEditComplete();
    } else {
      dispatch(addContact({ ...contact, id: Date.now() }));
    }
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome Completo" value={contact.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="E-mail" value={contact.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Telefone" value={contact.phone} onChange={handleChange} required />
      <button type="submit">{editMode ? 'Salvar Alterações' : 'Adicionar Contato'}</button>
    </Form>
  );
};

export default ContactForm;
