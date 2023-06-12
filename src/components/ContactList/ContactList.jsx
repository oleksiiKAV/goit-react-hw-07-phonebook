import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { BtnStyled } from 'components/ContactForm/ContactForm.styled';
import { ItemStyled, ListStyled } from './ContactList.styled';
import { getContact, removeContact } from 'redux/contactsOperations';
import { selectIsContacts, showFilteredContacts, selectError } from 'redux/contactsSelector';

const ContactList = () => {
  const dispatch = useDispatch();
  // const isContacts = useSelector(selectIsContacts);
  const  error = useSelector(selectError);
  const renderContacts =  useSelector(showFilteredContacts);
  useEffect(() => {
    // !isContacts && 
    dispatch(getContact());
  }, [dispatch]); //, isContacts
  
  return (
    <>{error && <div style={{ color: 'red' }}>Error: {error}</div>} 
    <ListStyled>
      {renderContacts.map(el => (
        <ItemStyled key={el.id}>
          {el.name}: {el.number}
          <BtnStyled onClick={() => dispatch(removeContact(el.id))}>
            Delete
          </BtnStyled>
        </ItemStyled>
      ))}
    </ListStyled>
    </>
  );
};
// }

export default ContactList;
