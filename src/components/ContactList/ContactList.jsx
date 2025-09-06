import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../Redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    if (contacts.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>No contacts found</p>
            </div>
        );
    }

    return (
        <ul className={styles.contactList}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
}