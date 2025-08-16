import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {contacts.map(c => (
                <li key={c.id} className={css.item}>
                    <div className={css.info}>
                        <span className={css.name}>{c.name}</span>
                        <span className={css.number}>{c.phone ?? c.number}</span>
                    </div>
                    <button
                        className={css.button}
                        onClick={() => dispatch(deleteContact(c.id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}