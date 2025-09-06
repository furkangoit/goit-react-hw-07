import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactsOps';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div className={styles.contact}>
            <div className={styles.info}>
                <span className={styles.name}>👤 {contact.name}</span>
                <span className={styles.number}>📞 {contact.number}</span>
            </div>
            <button
                type="button"
                onClick={handleDelete}
                className={styles.deleteBtn}
            >
                Delete
            </button>
        </div>
    );
}