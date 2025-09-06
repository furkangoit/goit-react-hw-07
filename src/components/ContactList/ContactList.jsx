import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../Redux/contactsSlice';
import Contact from '../Contact/Contact';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    if (contacts.length === 0) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '40px',
                color: '#666',
                fontStyle: 'italic'
            }}>
                <p>Hiç kişi bulunamadı</p>
            </div>
        );
    }

    return (
        <div>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    );
}