import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  const sortContactsByName = () =>
    [...filterContactsOnChange()].sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );

  return (
    <ContactListBox>
      {sortContactsByName().map(({ id, name, phone }) => (
        <ContactListItem key={id}>
          <ContactListText>Name: {name}</ContactListText>
          <ContactListText>Number: {phone}</ContactListText>
          <ContactListBtn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </ContactListBtn>
        </ContactListItem>
      ))}
    </ContactListBox>
  );
};

export default ContactList;
