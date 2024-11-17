import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleEdit = (contact) => {
    setEditMode(true);
    setContactToEdit(contact);
  };

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  const handleEditComplete = () => {
    setEditMode(false);
    setContactToEdit(null);
  };

  return (
    <>
      {editMode && <ContactForm editMode={true} contactToEdit={contactToEdit} onEditComplete={handleEditComplete} />}
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <div>
              <strong>{contact.name}</strong>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(contact)}>Editar</button>
              <button onClick={() => handleDelete(contact.id)}>Excluir</button>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
