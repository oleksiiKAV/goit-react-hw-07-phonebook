import { ContactForm, ContactList, Filter } from 'components';
import {
  TitleStyled,
  SubtitleStyled,
} from '../components/ContactForm/ContactForm.styled';
import Loader from './Loader/Loader';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <TitleStyled>Phonebook</TitleStyled>
      <ContactForm />
      <SubtitleStyled>Contacts</SubtitleStyled>
      <Filter />
      <Loader />
      <ContactList />
    </div>
  );
};
