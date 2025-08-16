import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const { id, name, phone, number } = contact;

    return (
        <div className={css.row}>
            <span className={css.text}>
                {name} — <b>{phone ?? number}</b>
            </span>
            <button className={css.delete} onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
        </div>
    );
}