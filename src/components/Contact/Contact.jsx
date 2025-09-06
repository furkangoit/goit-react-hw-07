import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactsOps';

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginBottom: '10px',
            backgroundColor: '#f9f9f9'
        }}>
            <div>
                <div style={{ fontWeight: '500', marginBottom: '5px' }}>
                    👤 {contact.name}
                </div>
                <div style={{ color: '#666' }}>
                    📞 {contact.number}
                </div>
            </div>
            <button
                onClick={handleDelete}
                style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Sil
            </button>
        </div>
    );
}