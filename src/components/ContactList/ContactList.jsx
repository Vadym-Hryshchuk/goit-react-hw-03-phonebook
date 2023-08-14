import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item } from './ContactList.styled';

export const ContactsList = ({ listOfContacts, handleDelete }) => {
  return (
    <>
      {listOfContacts.length > 0 ? (
        <ul>
          {listOfContacts.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                  handleDelete={handleDelete}
                />
              </Item>
            );
          })}
        </ul>
      ) : (
        <p>Phone book is empty!</p>
      )}
    </>
  );
};
