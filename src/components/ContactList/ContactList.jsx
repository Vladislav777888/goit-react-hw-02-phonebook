import PropTypes from 'prop-types';
import { ContactsItem, ContactsText, Button } from './ContactList.styled';
import { Box } from '../Box';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Box mt={10} ml={30} as="ul">
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsText>
            {name}: {number}
          </ContactsText>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </ContactsItem>
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
